- 配置如下：
  ```
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
  ```
  在组件没有任何引入的情况下：
  默认生成约 18 万行的 css 文件，大小约 4.1M
  开启 production，生成的文件只是 normalize 的，约 12kb
  继续开启 minify，生成的文件经过压缩，为 4kb
- c
