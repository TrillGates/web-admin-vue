<template>
    <div class="header-part clearfix">
        <!--显示内容-->
        <div class="header-left-box float-left">
            <div class="header-logo">管理中心标题</div>
        </div>
        <div class="header-right-box float-right">
            <div class="header-user-info clearfix">
                <div class="header-user-avatar float-left">
                    <img style="object-fit: cover"
                         :src="avatar">
                </div>
                <div class="header-user-username float-left">
                    <el-dropdown @command="handlerCommand">
                      <span class="el-dropdown-link">
                        {{ userName }} <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="userInfo">用户信息</el-dropdown-item>
                            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName: '阳光沙滩',
                avatar: 'https://cdn.sunofbeaches.com/images/default_avatar.png'
            }
        },
        methods: {
            handlerCommand(command) {
                if (command === 'userInfo') {
                    //TODO:
                } else if (command === 'logout') {
                    //TODO:
                }
            }
        },
        mounted() {

        }
    }
</script>
<style>

    .header-user-info {
        margin-right: 30px;
    }

    .header-user-username .el-dropdown-link {
        font-size: 14px;
        cursor: pointer;
        font-weight: 600;
        color: #fff;
        margin-left: 10px;
    }

    .header-user-avatar img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        vertical-align: middle;
    }

    .header-logo {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
    }
</style>
