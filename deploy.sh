#!/bin/bash

# 墨言网站部署脚本
# 用法: ./deploy.sh [选项]
# 选项:
#   --local-only    仅本地构建并上传，不在服务器上构建
#   --server-only   跳过本地构建，仅在服务器上构建

set -e

# 配置变量
SERVER_USER="root"
SERVER_HOST="118.196.16.142"
SERVER_PATH="/var/www/moyan"
LOCAL_PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
KEY_PATH="/Users/wuyuheng/keys/volcano-ec2.pem"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# SSH 命令封装
ssh_exec() {
    ssh -i "$KEY_PATH" -o StrictHostKeyChecking=no -o IdentitiesOnly=yes "${SERVER_USER}@${SERVER_HOST}" "$1"
}

# 解析命令行参数
LOCAL_BUILD=true
SERVER_BUILD=true

for arg in "$@"; do
    case $arg in
        --local-only)
            SERVER_BUILD=false
            ;;
        --server-only)
            LOCAL_BUILD=false
            ;;
        --help)
            echo "用法: ./deploy.sh [选项]"
            echo "选项:"
            echo "  --local-only    仅本地构建并上传 dist 目录，不在服务器上构建"
            echo "  --server-only   跳过本地构建，仅在服务器上构建"
            echo "  --help          显示此帮助信息"
            exit 0
            ;;
    esac
done

# 开始部署
log_info "========================================="
log_info "      墨言网站一键部署脚本"
log_info "========================================="
echo ""

# 1. 检查密钥文件
log_info "检查 SSH 密钥文件..."
if [ ! -f "$KEY_PATH" ]; then
    log_error "SSH 密钥文件不存在: $KEY_PATH"
    exit 1
fi
log_success "SSH 密钥文件检查通过"

# 2. 测试服务器连接
log_info "测试服务器连接..."
if ! ssh_exec "echo Connected" > /dev/null 2>&1; then
    log_error "无法连接到服务器，请检查网络和密钥权限"
    exit 1
fi
log_success "服务器连接正常"

# 3. 本地构建（可选）
if [ "$LOCAL_BUILD" = true ]; then
    log_info "开始本地构建..."
    cd "$LOCAL_PROJECT_DIR"
    npm run build
    log_success "本地构建完成"

    # 创建临时备份
    if [ -d "dist" ]; then
        log_info "备份本地 dist 目录..."
        mv dist dist.bak
    fi
fi

# 4. 上传代码到服务器
log_info "上传代码到服务器..."
rsync -avz \
    --exclude 'node_modules' \
    --exclude 'dist' \
    --exclude 'dist.bak' \
    --exclude '.git' \
    --exclude '.DS_Store' \
    -e "ssh -i $KEY_PATH -o StrictHostKeyChecking=no -o IdentitiesOnly=yes" \
    "$LOCAL_PROJECT_DIR/" \
    "${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/"

log_success "代码上传完成"

# 5. 服务器端构建
if [ "$SERVER_BUILD" = true ]; then
    log_info "在服务器上安装依赖并构建..."
    ssh_exec "cd $SERVER_PATH && npm install && npm run build"
    log_success "服务器构建完成"
elif [ "$LOCAL_BUILD" = true ]; then
    # 如果使用本地构建模式，上传 dist 目录
    log_info "上传本地构建产物..."
    rsync -avz \
        -e "ssh -i $KEY_PATH -o StrictHostKeyChecking=no -o IdentitiesOnly=yes" \
        "$LOCAL_PROJECT_DIR/dist/" \
        "${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}/dist/"

    # 恢复本地 dist 目录
    if [ -d "dist.bak" ]; then
        mv dist.bak dist
    fi
    log_success "构建产物上传完成"
fi

# 6. 验证部署
log_info "验证部署状态..."
HTTP_CODE=$(ssh_exec "curl -s -o /dev/null -w '%{http_code}' http://localhost")
if [ "$HTTP_CODE" = "200" ]; then
    log_success "网站响应正常 (HTTP $HTTP_CODE)"
else
    log_warn "网站响应异常 (HTTP $HTTP_CODE)"
fi

# 7. 显示部署信息
echo ""
log_success "========================================="
log_success "         部署完成！"
log_success "========================================="
echo ""
echo -e "访问地址: ${GREEN}https://moyan.iamagamer.fun${NC}"
echo ""
echo "服务器信息:"
echo "  - 路径: $SERVER_PATH"
echo "  - 主机: $SERVER_HOST"
echo ""

# 8. 可选：显示日志
read -p "是否查看 nginx 日志? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log_info "最近 20 条 nginx 日志:"
    ssh_exec "tail -20 /var/log/nginx/access.log"
fi
