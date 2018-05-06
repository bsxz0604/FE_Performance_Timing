# FE_Performance_Timing


## 说明

前端性能监控

## 本地调试

```
npm run build:dev
```

## 使用方式

1. 打开console后刷新页面
```
<script src="./dist/_performanceShow.js"></script>
<script type="text/javascript">
    window._performanceShow && window._performanceShow.start('console');
</script>
```

2. 或者只引入
```
<script src="./dist/_performanceShow.js"></script>
```
然后在console中输入
```
window._performanceShow && window._performanceShow.start('console');
```
