
    create table tb_sales (
       id bigint generated by default as identity,
        amount double,
        date date,
        deals integer,
        visited integer,
        seller_id bigint,
        primary key (id)
    );

    create table tb_sellers (
       id bigint generated by default as identity,
        name varchar(255),
        primary key (id)
    );

    alter table tb_sales 
       add constraint FKp0nn0oixeiw2fq3jivj6vnsu 
       foreign key (seller_id) 
       references tb_sellers;

    create table tb_sales (
       id bigint generated by default as identity,
        amount double,
        date date,
        deals integer,
        visited integer,
        seller_id bigint,
        primary key (id)
    );

    create table tb_sellers (
       id bigint generated by default as identity,
        name varchar(255),
        primary key (id)
    );

    alter table tb_sales 
       add constraint FKp0nn0oixeiw2fq3jivj6vnsu 
       foreign key (seller_id) 
       references tb_sellers;

    create table tb_sales (
       id bigint generated by default as identity,
        amount double,
        date date,
        deals integer,
        visited integer,
        seller_id bigint,
        primary key (id)
    );

    create table tb_sellers (
       id bigint generated by default as identity,
        name varchar(255),
        primary key (id)
    );

    alter table tb_sales 
       add constraint FKp0nn0oixeiw2fq3jivj6vnsu 
       foreign key (seller_id) 
       references tb_sellers;

    create table tb_sales (
       id bigint generated by default as identity,
        amount double,
        date date,
        deals integer,
        visited integer,
        seller_id bigint,
        primary key (id)
    );

    create table tb_sellers (
       id bigint generated by default as identity,
        name varchar(255),
        primary key (id)
    );

    alter table tb_sales 
       add constraint FKp0nn0oixeiw2fq3jivj6vnsu 
       foreign key (seller_id) 
       references tb_sellers;
