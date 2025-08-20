---
title: MySQL 安装与配置指南
description: MySQL 社区版的本地部署与 IDE 开发指南
---

!!! abstract "MySQL [^1]"

    **MySQL** 是一个开源的关系型数据库管理系统（RDBMS），由 Oracle
    公司开发和维护，以其高性能、可靠性和易用性成为最流行的数据库之一。MySQL 支持标准 SQL
    语法，同时提供了丰富的存储引擎支持（如 InnoDB、MyISAM）、主从复制、分区表、事务 ACID
    特性等核心功能，广泛应用于 Web 应用、企业级软件和云计算服务，是经典的
    LAMP（Linux + Apache + MySQL +PHP/Python/Perl）技术栈的关键组件之一。

!!! info "MySQL 社区版与企业版"

    MySQL 主要分为两种版本：社区版和企业版，一般个人开发使用社区版即可，本指南主要聚焦于 **MySQL 社区版**。
    
    <div class="grid cards" markdown>

    -   **MySQL 社区版（MySQL Community Edition）**

        官方免费开源版本，采用 GPL 许可证，提供完整的数据库功能，包括事务支持、复制、分区和存储过程等，由全球开发者社区维护，适合个人学习、中小型项目或预算有限的企业使用。

    -   **MySQL 企业版（MySQL Enterprise Edition）**

        Oracle 提供的商业版本，包含社区版的所有功能，并额外提供高级安全工具、性能优化插件、监控工具以及官方技术支持服务，适合对稳定性、安全性和服务保障有高要求的大型企业或关键业务系统。

    </div>

!!! note "MySQL 社区版组件 [^2]"

    MySQL 社区版主要包含以下核心组件：

    - **InnoDB 存储引擎（Storage Engine）**：支持事务处理、行级锁和高并发，是 MySQL 的默认引擎。
    - **MySQL 复制（Replication）**：支持主从复制，提升数据可用性和读取性能。
    - **MySQL 文档存储（Document Store）**：提供 NoSQL 功能，支持 JSON 文档操作。
    - **MySQL Router**：轻量级中间件，实现应用与数据库集群的透明路由。
    - **MySQL Workbench**：官方图形化管理工具，支持数据库设计、开发和运维。
    - **多语言连接器（Connectors）**：如 JDBC、ODBC、.NET 等，方便不同编程语言访问数据库。
    - **性能优化工具**：包括 Performance Schema 和 Information Schema，用于监控和调优。

[^1]: [MySQL - The world's most popular open source database](https://www.mysql.com/)
[^2]: [MySQL::Community Edition | Products](https://www.mysql.com/products/community/)
