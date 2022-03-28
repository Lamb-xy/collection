# **校园帮帮忙**——自助收发单系统

> 点击目录以跳转

## 需求分析

该系统是针对在校生的一款互助 WEB 应用程序，每一位用户既可以作为帮助者，也可以作为求助者。

求助者通过系统发单，填写自己需要帮助的类型和详细信息（包括不限于课程辅导、信息咨询、旧物出售、约会聚餐、紧急需求）。所有求助信息可在**帮助大厅**查看，帮助者选择自己力所能及的求助信息进行帮助。最后由求助者操作进行结束帮助。

在等待帮助期间，求助者可以随时取消求助。

![logo_sdw](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181647836.png)

[项目地址](https://gitee.com/easy_to_remeber/campus-help)

[演示视频](https://www.bilibili.com/video/BV16Y411W73w/)

### 数据流图

![image-20211125234234585](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202111252342649.png)

### 数据字典

#### 数据项

##### 用户信息

| 数据项名 | ID                   |
| -------- | -------------------- |
| 说明     | 用于唯一标识用户     |
| 类型     | 字符型               |
| 长度     | 8                    |
| 取值范围 | 00000001 —— 99999999 |

| 数据项名 | 姓名                   |
| -------- | ---------------------- |
| 说明     | 用户自行确定的唯一名称 |
| 类型     | 字符型                 |
| 长度     | 小于10                 |

| 数据项名 | 性别              |
| -------- | ----------------- |
| 说明     | 标识用户性别      |
| 类型     | 字符型            |
| 长度     | 1                 |
| 取值范围 | IN   '男',   '女' |

| 数据项名 | 年龄     |
| -------- | -------- |
| 说明     | 用户年龄 |
| 类型     | int      |
| 长度     | 2        |
| 取值范围 | 18 —— 99 |

| 数据项名 | 学院             |
| -------- | ---------------- |
| 说明     | 用于标识用户学院 |
| 类型     | 字符型           |
| 长度     | 小于10           |

| 数据项名 | 年级             |
| -------- | ---------------- |
| 说明     | 用于标识用户年级 |
| 类型     | int              |
| 长度     | 4                |
| 取值范围 | 2000 ——          |

| 数据项名 | 帮助量                     |
| -------- | -------------------------- |
| 说明     | 用于标识用户帮助他人的数量 |
| 类型     | int                        |

##### 求助信息

| 数据项名 | 求助ID                   |
| -------- | ------------------------ |
| 说明     | 用于唯一标识一条求助信息 |
| 类型     | 字符型                   |
| 长度     | 8                        |
| 取值范围 | 00000001 —— 99999999     |

| 数据项名 | 时间                 |
| -------- | -------------------- |
| 说明     | 用于标识求助发起时间 |
| 类型     | datetime             |

| 数据项名 | 地点                   |
| -------- | ---------------------- |
| 说明     | 用于确定求助发起的地点 |
| 类型     | 字符型                 |
| 长度     | 50                     |

| 数据项名 | 类型                                                         |
| -------- | ------------------------------------------------------------ |
| 说明     | 用于确定求助种类                                             |
| 类型     | 字符型                                                       |
| 取值范围 | ”课程辅导“、”信息咨询“、”旧物出售“、”约会聚餐“、”紧急需求“、”其它需求“ |

| 数据项名 | 求助标题               |
| -------- | ---------------------- |
| 说明     | 用于对求助信息进行概括 |
| 类型     | 字符型                 |
| 长度     | 小于20                 |
| 取值范围 | 1 —— 20                |

| 数据项名 | 详细信息                   |
| -------- | -------------------------- |
| 说明     | 用于对求助信息进行具体描述 |
| 类型     | 字符型                     |
| 长度     | 小于500                    |
| 取值范围 | 1 —— 500                   |

| 数据项名 | 帮助人                 |
| -------- | ---------------------- |
| 说明     | 接受本次帮助请求的用户 |
| 类型     | 字符型                 |
| 长度     | 8                      |
| 取值范围 | 00000000 —— 99999999   |

| 数据项名 | 被帮助人             |
| -------- | -------------------- |
| 说明     | 发起本次帮助的用户   |
| 类型     | 字符型               |
| 长度     | 8                    |
| 取值范围 | 00000000 —— 99999999 |

| 数据项名 | 开始时间       |
| -------- | -------------- |
| 说明     | 开始帮助的时间 |
| 类型     | datetime       |

| 数据项名 | 结束时间       |
| -------- | -------------- |
| 说明     | 结束帮助的时间 |
| 类型     | datetime       |

#### 数据结构

| 数据结构 | 用户信息                                 |
| -------- | ---------------------------------------- |
| 含义     | 记录用户相关信息                         |
| 组成成分 | ID、姓名、性别、年龄、学院、年级、帮助量 |

| 数据结构 | 求助信息                                                     |
| -------- | ------------------------------------------------------------ |
| 含义     | 记录一次帮助的相关信息                                       |
| 组成成分 | 求助ID、时间、地点、类型、标题、详细、帮助人、被帮助人、开始时间、结束时间 |

#### 数据流

| 数据流名 | 求助信息                             |
| -------- | ------------------------------------ |
| 说明     | 根据发布求助的用户所提供信息发布求助 |
| 来源     | 求助者                               |
| 去向     | 帮助者                               |
| 数据结构 | 用户信息、求助信息                   |

| 数据流名 | 帮助信息                     |
| -------- | ---------------------------- |
| 说明     | 根据帮助人的相关信息接受求助 |
| 来源     | 帮助者                       |
| 去向     | 求助者                       |
| 数据结构 | 求助信息                     |

| 数据流名 | 完成帮助                                       |
| -------- | ---------------------------------------------- |
| 说明     | 求助者在完成帮助后在系统中进行确认，结束该帮助 |
| 来源     | 求助者                                         |
| 去向     | 帮助者                                         |
| 数据结构 | 用户信息、求助信息                             |

#### 数据存储

| 数据存储名 | 用户信息                                 |
| ---------- | ---------------------------------------- |
| 说明       | 记录用户相关信息                         |
| 输入数据流 | 系统、完成帮助                           |
| 输出数据流 | 求助信息                                 |
| 数据描述   | ID、姓名、性别、年龄、学院、年级、帮助量 |
| 数据量     | 约20条记录                               |
| 存取方式   | 随机                                     |

| 数据存储名 | 求助信息                                                     |
| ---------- | ------------------------------------------------------------ |
| 说明       | 记录一次帮助的相关信息                                       |
| 输入数据流 | 求助信息、帮助信息、完成帮助                                 |
| 输出数据流 | 求助信息                                                     |
| 数据描述   | 求助ID、时间、地点、类型、标题、详细、帮助人、被帮助人、开始时间、结束时间 |
| 数据量     | 约200条记录                                                  |
| 存取方式   | 随机                                                         |

#### 处理过程

| 处理过程名 | 发布求助信息                         |
| ---------- | ------------------------------------ |
| 说明       | 根据用户信息、求助信息，生成一次求助 |
| 输入数据   | 用户信息、求助信息                   |
| 数据存储   | 求助信息                             |
| 输出数据   | 求助信息                             |

| 处理过程名 | 接受求助请求                   |
| ---------- | ------------------------------ |
| 说明       | 根据帮助者信息，更新求助信息表 |
| 输入数据   | 用户信息                       |
| 数据存储   | 求助信息                       |
| 输出数据   | 帮助信息                       |

| 处理过程名 | 帮助完成           |
| ---------- | ------------------ |
| 说明       | 求助者确认帮助完成 |
| 输入数据   | 用户信息、求助信息 |
| 数据存储   | 用户信息、求助信息 |
| 输出数据   | 完成帮助           |

## 概念结构设计（ER图）

![image-20211125234217789](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202111252342864.png)

## 逻辑结构设计（关系模式）

user ( <u>user_id</u>, name, age, gender, grade, college, dormitory, help_num, email, phone )

help ( <u>help_id</u>, time, location, type, title, detail, begin, end, helpee_id, helper_id )

## 数据库设计与实施

### TABLE

#### USER

user_id 设置自增属性，8位显示，零填充

![image-20211211145509696](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111455738.png)

#### HELP

help_id 设置自增属性，10位显示，零填充

![image-20211211145550768](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111455798.png)

### Foreign Key

| 外键名    | 表 .列名       | 被引用表 .被引用列名 | 说明         |
| --------- | -------------- | -------------------- | ------------ |
| fk_helpee | help .helpe_id | user .user_id        | 约束求助人ID |
| fk_helper | help .helpr_id | user .user_id        | 约束帮助人ID |

### 存储过程

```sql
-- 完成一次帮助，接收帮助号（由发起人操作）
delimiter $$
CREATE PROCEDURE Finish_Help(
    IN_help_id int(10))
BEGIN
	UPDATE `campus_help`.`help` 
	SET
	end = CURRENT_TIMESTAMP
	WHERE
	help_id = IN_help_id and begin is not null and end is null;
END$$
delimiter ;
```

```sql
-- 接取一个请求，接收帮助号、帮助人ID（由接收人操作）
delimiter $$
CREATE PROCEDURE Take_Help(
    IN_help_id int(10),
    IN_helper_id int(10))
BEGIN
	UPDATE `campus_help`.`help` 
	SET
	helper_id = IN_helper_id, begin = CURRENT_TIMESTAMP
	WHERE
	help_id = IN_help_id and helper_id is null;
END$$
delimiter ;
```

```sql
-- 取消一个请求，接收帮助号（由发起人操作）
delimiter $$
CREATE PROCEDURE Cancel_Help(
    IN_help_id int(10))
BEGIN
	DELETE FROM `campus_help`.`help` 
	WHERE
	help_id = IN_help_id;
END$$
delimiter ;
```

```sql
-- 修改用户信息
delimiter $$
CREATE PROCEDURE chge_UserInfo(
    IN_uid INT(8),
	IN_u_name VARCHAR(10),
	IN_gender CHAR(5),
	IN_age INT,
	IN_grade INT,
	IN_college VARCHAR(20),
	IN_dormitory VARCHAR(20),
	IN_email VARCHAR(20),
	IN_phone VARCHAR(20))
BEGIN
	UPDATE `campus_help`.`user` 
	SET
	name = IN_u_name, age = IN_age, 
    gender = IN_gender, grade = IN_grade, college = IN_college, 
    dormitory = IN_dormitory, email = IN_email, phone = IN_phone
	WHERE
	user_id = IN_uid;
END$$
delimiter ;
```



```sql
-- 清空help帮助表，自增值回归 1000000001
delimiter $$
CREATE PROCEDURE Reset_Help()
BEGIN
    truncate table `help`;
	alter table `help` AUTO_INCREMENT=1;
END
delimiter ;	
```

```sql
-- 清空user用户表，自增值回归 00000001
delimiter $$
CREATE PROCEDURE Reset_User()
BEGIN
	delete from user;
	alter table `user` AUTO_INCREMENT=00000001;
END$$
delimiter ;
```

### 触发器

```sql
-- 确保帮助者与被帮助者不是同一人
DELIMITER $$
create trigger helpee_helper
before update on help
for each row
begin
	if (new.helper_id = old.helpee_id) then
		update help 
        set helper_id = null, begin = null, end = null      
        where help_id = old.help_id;
	end if;
	
end$$
DELIMITER ;
```

```sql
-- 帮助完成时自动为帮助者的help_num属性加1
DELIMITER $$
create trigger count_help_num
after update on help
for each row
begin
	if (new.end is not null) and (old.end is null)then
		update user, help
        set help_num = help_num+1
        where user_id = helper_id
			 and helper_id is not null
             and help_id = new.help_id;
	end if;
end$$
DELIMITER ;
```

### 自定义函数

```sql
-- 创建一个用户，返回其对应user_id
delimiter $$
CREATE function Create_User(
    name varchar(10),
    age int,
    gender char(5),
    grade int,
    college varchar(20),
    dormitory varchar(20),
    email varchar(20),
    phone varchar(20),
    pswd varchar(20))
returns int(8) DETERMINISTIC
BEGIN
	declare out_id int(8);
    
	INSERT INTO `campus_help`.`user` 
    (`name`, `age`, `gender`, `grade`, `college`, `dormitory`, `email`, `phone`, `psd`) 
    VALUES 
    (name, age, gender, grade, college, dormitory, email, phone, pswd);
    
    select max(user_id) into out_id from user;
    
    return out_id;
END$$
delimiter ;
```

```sql
-- 创建一次帮助请求，返回其对应help_id
delimiter $$
CREATE function Create_Help(
    helpee_id int(10),
    location varchar(50),
    type varchar(4),
    title varchar(15),
    detail varchar(200))
returns int(10) DETERMINISTIC
BEGIN
	declare out_id int(10);
    
	INSERT INTO `campus_help`.`help` 
    (`helpee_id`, `time`, `location`, `type`, `title`, `detail`) 
    VALUES 
    (helpee_id, CURRENT_TIMESTAMP, location, type, title, detail);

    
    select max(help_id) into out_id from help;
    
    return out_id;
END$$
delimiter ;
```

```sql
-- 检测用户密码是否正确
delimiter $$
CREATE function Login(
    IN_user_id int(8),
    IN_psd varchar(20))
returns int DETERMINISTIC
BEGIN
	declare  tmp_psd char(50);
    
    select psd into tmp_psd from user where user_id = IN_user_id;
    if (tmp_psd = IN_psd) then
		return 1;
	else return 0;
	end if;
END$$
delimiter ;
```

```sql
-- 取消一次帮助，接收帮助号、uid。（由发起人操作）
-- 返回1：成功；返回0：失败
delimiter $$
CREATE FUNCTION Cancel_Help(
    IN_help_id int(10),
    IN_user_id int(8))
returns int DETERMINISTIC
BEGIN
	declare user int(8);
    declare helper int(8);
    
    select helpee_id into user from help
		where help_id = IN_help_id;
	select helper_id  into helper from help
		where help_id = IN_help_id;
        
    if( user = IN_user_id ) and (helper is null) then
		delete from help where help_id = IN_help_id;
		return 1;
    else return 0;
    end if;
END$$
delimiter ;
```



### 视图

```sql
-- 筛选已经完成的帮助，时间降序
create view Help_Finished as
select a.name as 'helpee', helpee_id, a.email as 'email',  a.phone as 'phone',
		time, location, type, title, detail, 
		b.name as 'helper', helper_id, begin, end 
from help h 
inner join user a on h.helpee_id = a.user_id
inner join user b on h.helper_id = b.user_id
where end is not null
order by time desc;	
```

```sql
-- 筛选正在进行中的帮助，开始时间降序
create view Help_doing as
select a.name as 'helpee', helpee_id,  a.email as 'email',  a.phone as 'phone',
		time , location, type, title, 
		detail, help_id,
		b.name as 'helper', helper_id, begin
from help h 
inner join user a on h.helpee_id = a.user_id
inner join user b on h.helper_id = b.user_id
where end is null and helper_id is not null 
order by begin desc;
```

```sql
-- 筛选等待接取的帮助，发布时间降序
create view Help_Waiting as
select a.name as 'helpee', helpee_id,  a.email as 'email',  a.phone as 'phone',
		time, location, type, title, detail, help_id
from help h 
inner join user a on h.helpee_id = a.user_id
where helper_id is null
order by time desc;
```





```sql
-- 筛选已经完成的帮助，帮助ID升序
create view Finished_Help as
select help_id as '帮助ID', a.name as '求助人', time as '时间', 
	location as '地点', type as '类型', title as '标题', 
	detail as '详细描述', 
    b.name as '帮助人', 
    begin as '开始时间', end as '结束时间' 
from help h 
inner join user a on h.helpee_id = a.user_id
inner join user b on h.helper_id = b.user_id
where end is not null
order by help_id;

#########
```

```sql
-- 筛选正在进行中的帮助，开始时间降序
create view Helping as
select help_id as '帮助ID', a.name as '求助人', time as '时间', 
	location as '地点', type as '类型', title as '标题', 
	detail as '详细描述', 
    b.name as '帮助人', 
    begin as '开始时间'
from help h 
inner join user a on h.helpee_id = a.user_id
inner join user b on h.helper_id = b.user_id
where end is null and helper_id is not null 
order by begin desc;###################
```

```sql
-- 筛选等待接取的帮助，发布时间降序
create view Waiting_Help as
select help_id as '帮助ID', a.name as '求助人', time as '时间', 
	location as '地点', type as '类型', title as '标题', 
	detail as '详细描述'
from help h 
inner join user a on h.helpee_id = a.user_id
where helper_id is null
order by time desc;##################
```

### 数据库实施

在Mysql Workbench中建立好对应的表以及各种约束、视图后，将准备好的数据导入campus_help数据库。

可以使用Excel自带的函数方便的生成所需要的示例数据：

![image-20211211151056883](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111510008.png)

![image-20211211151123511](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111511639.png)

通过命令将数据导入数据库：

```sql
load data infile 
	"C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/data.txt"
into table help
	(`helpee_id`, `time`, `location`, `type`, `title`, `detail`, `helper_id`, `begin`, `end`);
```

![image-20211211151238374](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111512451.png)

![image-20211211151257473](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111512545.png)

## 前后端实施

项目的前后端分别采用 [Vue](https://cn.vuejs.org/)、[Nodejs](http://nodejs.cn/) 进行编写。

<img src="https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181654658.png" alt="图片3" style="zoom: 33%;" />

<img src="https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181655543.png" alt="图片4" style="zoom: 25%;" />

因为项目重点在于数据库应用，故不对前后端实现细节做具体介绍。

### 前后端文件目录

```
campus_help:		// 开发环境下
│  babel.config.js   // 配置文件
│  package-lock.json // 包配置文件
│  package.json      // 包配置文件
│  vue.config.js     // 配置文件
│  
├─public    // 前端页面静态资源
│  │  createHelp.html   // 页面资源
│  │  favicon.ico
│  │  HelpMall.html
│  │  index.html
│  │  myHelp.html
│  │  Personnal.html
│  │  Register.html
│  │  
│  └─img    // 图片资源
│          createHelp.png
│          HelpMall.png
│          login_bg.png
│          logo.png
│          logo_sdw.png
│          MyHelp.png
│          Personnal.png
│          side_pic.png
│          
├─server    // 后端服务器文件
│  │  app.js    // 后端入口文件
│  │  
│  ├─db     // ********* 数据库相关文件 ********** //
│  │      db.js     // 数据库连接配置文件
│  │      sqlMap.js     // sql语句对应表，存放所有sql语句
│  │      
│  └─router     // 后端路由文件
│          help.js
│          user.js
│          
└─src   // 前端框架文件
    │  App.vue
    │  main.js		// 前端入口文件
    │  
    ├─assets		// 样式与图标文件
    │  ├─css
    │  │      reset.css
    │  │      
    │  └─ttf
    │          iconfont.css
    │          iconfont.ttf
    │          iconfont.woff
    │          iconfont.woff2
    │          
    ├─components	// 组件
    │      AHelp.vue
    │      Banner.vue
    │      Footer.vue
    │      Login.vue
    │      Nav.vue
    │      Tag.vue
    │      
    └─pages		// vue页面文件
        ├─createHelp	// 创建帮助
        │  │  createHelp.js
        │  │  createHelp.vue
        │  │  
        │  └─components
        │          createAHelp.vue
        │          
        ├─HelpMall		// 帮助大厅
        │      HelpMall.js
        │      HelpMall.vue
        │      
        ├─myHelp		// 我的帮助
        │      myHelp.js
        │      myHelp.vue
        │      
        ├─Personnal		// 个人信息
        │  │  Personnal.js
        │  │  Personnal.vue
        │  │  
        │  └─components
        │          UserInfo.vue
        │          
        └─Register		// 注册页
                Register.js
                Register.vue
```

## 如何启动

本项目的运行需要 MySQL 以及 Nodejs 环境

#### MySQL

> 版本：mysql-community-8.0.21.0

安装好后导入数据库文件：`./campus_help.sql`

#### Nodejs

> 版本：node-v16.13.1-x64

安装包已附在文件夹中：`./其它资源/node-v16.13.1-x64.msi`

[安装教程](https://blog.csdn.net/Small_Yogurt/article/details/104968169)

### 数据库连接配置

在文件`\server\db\db.js`修改配置

```javascript
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',	// 主机
    user: 'root',		// 用户名
    password: '12315',	// 密码
    database: 'campus_help'	// 要连接的数据库
});
```

### 打包文件启动

打包文件位于 `./Packaged`

#### 启动后端服务器

```
server:
│  app.js
│  package-lock.json
│  package.json
│  
├─db
│      db.js 	// 数据库配置文件，在这里修改数据库连接
│      sqlMap.js
│      
└─router
        help.js
        user.js
```

1. 进入`server`文件夹

   ```shell
   cd .\server\
   ```

2. 安装所需依赖包

   ```shell
   npm i
   ```

   执行后将自动解析`package.json`中写好的依赖信息，下载所有依赖到`node_modules`文件夹中

   ![image-20211218190341134](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181903223.png)

   约 3mb：

   ![image-20211218190501627](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181905660.png)

3. 启动服务器

   ```shell
   node app
   ```

   出现以下信息代表服务器已经启动

   ![image-20211218191336618](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181913671.png)

#### 启动前端服务器

首先安装全局依赖 `serve` ，用于在本地模拟一个前端服务器

```shell
npm i serve -g
```

> 注意需要 -g 参数，否则无法运行
>
> -g：将依赖包安装至 node 全局，会在卸载 node 后一并删除



1. 进入`Packaged`文件夹

2. 启动本地前端服务器

   ```shell
   serve dist
   ```

   出现以下信息代表启动成功，访问链接即可进入项目页面：

   ![image-20211218192034057](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181920098.png)

   

> CTRL + C 可以关闭两个服务器



项目截图：

![image-20211218192418627](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181924755.png)

![image-20211218192441035](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181924153.png)

![image-20211218192506847](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181925122.png)

![image-20211218192519950](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112181925110.png)

#### 启动项目可能出现的问题

数据库连接失败

```
错误：1251 Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

[解决方案](https://blog.csdn.net/OCEAN_C/article/details/89719578)

## 遇到问题及解决方法

### 1. ER图绘制问题

因为该系统设计所有用户既可以发布求助，也可以接受求助，因此在ER图中我将**发布者与接收者**当作两个实体，将**帮助**作为了一种关系进行绘制。

但在绘制过程中发现求助与帮助两种情况无法区分，于是求助老师。老师提示应该将用户与帮助分别作为两个实体，在额外加上两个“发起” “接受”关系即可。

![image-20211130175605477](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202111301756637.png)

之后我将原来的ER图重新进行了绘制。

### 2. ID产生问题

无论是用户还是帮助信息，都需要产生一个唯一id进行标识。而人工通过后端算法产生id比较复杂，于是我在数据库中设计ID字段为int类型，并且设置了自增、自动补零，解决了id问题。

### 3. 数据导入问题

在我准备将txt中准备好的数据导入数据库时，发现mysql总是会进行报错

```
Error Code: 1290. The MySQL server is running with the --secure-file-priv option so it cannot execute this statement
```

上网查阅资料，并没有发现有出现错误的步骤。

于是我在配置文件中查找`Secure_File_Priv`的路径，突然发现可能是我将路径分隔符写为`\`的原因：

![image-20211210223752659](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112102237687.png)

![image-20211210223620352](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112102236439.png)

随后我立刻进行了修改，终于成功导入数据！

![image-20211210223839844](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112102238895.png)

### 4. 导入空值问题

在help表中存在部分字段为空值，在导入这些字段时，我尝试使用NULL、\t空格、/N、不导入值等等都会报错，最后才发现在txt中应该使用\N才能导入空值。

最后成功导入：

![image-20211210235431613](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112102354708.png)

![image-20211210235503226](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112102355293.png)

### 5. 多表更新问题

在创建触发器更新help_num时，sql报出以下错误：

```
Error Code: 1054. Unknown column 'helper_id' in 'where clause'
```

该错误含义为找不到对应列，但经过检查，sql语句的书写没有问题。

又经过查阅资料，发现在多表更新时，及时只更新一个表的数据，但如果使用到了其他表，也应在update语句后附上，而我忽略了这一点：

![image-20211211101621217](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111016269.png)

加上help表后功能回复正常：

![image-20211211101802000](https://gitee.com/drawing-bed-lyx/drawing-bed/raw/master/img/typora/202112111018032.png)

### 6. 连续使用同一张表连接问题

在创建视图时，需要将帮助人与被帮助人的ID替换为姓名，通常的查询无法在一次select中两次连接同一张表。这种情况可以使用`innner join`方法重命名两个需要被链接的表，达到目的效果：

```sql
inner join user a on h.helpee_id = a.user_id
inner join user b on h.helper_id = b.user_id
```



