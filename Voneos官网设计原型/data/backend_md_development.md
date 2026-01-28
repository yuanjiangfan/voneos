# 后端开发文档

### 1. 轮播图表 (banners)

用于存储首页及其他页面的轮播图数据。

| 字段名 | 类型 | 说明 | 主要用途 |
| :--- | :--- | :--- | :--- |
| id | uuid | 主键 | 唯一标识 |
| title | text | 标题 | 图片描述或用于SEO |
| image_url | text | 图片链接 | 轮播图的图片地址 |
| link_url | text | 跳转链接 | 点击轮播图跳转的地址 (可选) |
| sort_order | integer | 排序权重 | 控制显示顺序，数字越小越靠前 |
| is_active | boolean | 是否启用 | 控制是否在前端显示 |
| created_at | timestamp | 创建时间 | 记录创建时间 |
| updated_at | timestamp | 更新时间 | 记录最后更新时间 |

#### 前端对应接口定义 (Banner)

```typescript
export interface Banner {
    id: string;
    title: string;
    imageUrl: string;
    linkUrl?: string; // 可选
    sortOrder: number;
}
```

### 3. 平台信息表 (contact_platforms) (原 platforms)

用于存储联系我们页面的品牌官号和旗舰店信息。

| 字段名 | 类型 | 约束 | 说明 |
| :--- | :--- | :--- | :--- |
| id | uuid | Primary Key, Default: gen_random_uuid() | 唯一标识 |
| name | text | Not Null | 内部标识或Alt文本 |
| label | text | Not Null | 前端显示的文字 |
| icon_url | text | Not Null | 图标链接 |
| qrcode_url | text | Nullable | 二维码图片链接 (仅官号需要) |
| link | text | Nullable | 跳转链接 |
| type | text | Not Null, Check: in ('official_account', 'flagship_store') | 类型区分 |
| sort_order | integer | Default: 0 | 排序权重 |
| is_active | boolean | Default: true | 是否启用 |
| created_at | timestamp with time zone | Default: now() | 创建时间 |
| updated_at | timestamp with time zone | Default: now() | 更新时间 |

#### SQL DDL (Supabase)

```sql
create table public.contact_platforms (
  id uuid not null default gen_random_uuid (),
  name text not null,
  label text not null,
  icon_url text not null,
  qrcode_url text null,
  link text null,
  type text not null check (type in ('official_account', 'flagship_store')),
  sort_order integer null default 0,
  is_active boolean null default true,
  created_at timestamp with time zone not null default timezone ('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone ('utc'::text, now()),
  constraint contact_platforms_pkey primary key (id)
);

-- 开启 RLS
alter table public.contact_platforms enable row level security;

-- 允许公开读取
create policy "Enable read access for all users" on public.contact_platforms for select using (true);

-- 仅允许认证用户(管理员)增删改 (假设已有 authenticated 角色)
create policy "Enable insert for authenticated users only" on public.contact_platforms for insert to authenticated with check (true);
create policy "Enable update for authenticated users only" on public.contact_platforms for update to authenticated using (true);
create policy "Enable delete for authenticated users only" on public.contact_platforms for delete to authenticated using (true);
```

#### 前端对应接口定义 (Platform)

```typescript
export interface Platform {
    id: string;
    name: string;
    label: string;
    iconUrl: string;
    qrcodeUrl?: string;
    link?: string;
    type: 'official_account' | 'flagship_store';
    sortOrder: number;
}
```
