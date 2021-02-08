## 资源码(FileID)使用教程
### Android
#### 第一次使用
1. 安装Termux。
2. 打开Termux。
3. 授予所有权限。
4. 输入
```bash
sh -c "$(curl -fsSL https://gitee.com/idkzr/termux-ohmyzsh/raw/master/install.sh)"
```

#### 后续步骤
5. 复制资源码，如`22187534`，  
复制命令,修改`资源码`3个字为复制的资源码。
```bash
curl -X POST \
-d '{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 资源码}' \
-H "Content-Type:application/json" \
-H "Authorization: token 3d81637cf09027ffa006d707419a899e2f3f4cca" \
"https://xrzyun.coding.net/open-api"
```
  

6. 在Termux里输入**修改后的命令**，回车。  
Demo:
```bash
curl -X POST \
-d '{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 22187534}' \
-H "Content-Type:application/json" \
-H "Authorization: token 3d81637cf09027ffa006d707419a899e2f3f4cca" \
"https://xrzyun.coding.net/open-api"
```
7. 得到类似以下字段  
(Tips:第一个框为 格式化前，第二个框为格式化后。)
```json
{"Response":{"RequestId":"bcf22e03-1f35-9e9e-fb4e-0724fb07876d","Url":"http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605870050%3B1605873650%26q-key-time%3D1605870050%3B1605873650%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D3b817c4a35f02aa281fbe7a8d13b1691ed92324d&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sun%2C%2022%20Nov%202020%2023%3A00%3A50%20GMT"}}
```
```json
{
    "Response": {
        "RequestId": "bcf22e03-1f35-9e9e-fb4e-0724fb07876d",
        "Url": "http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605870050%3B1605873650%26q-key-time%3D1605870050%3B1605873650%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D3b817c4a35f02aa281fbe7a8d13b1691ed92324d&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sun%2C%2022%20Nov%202020%2023%3A00%3A50%20GMT"
    }
}
```
复制`"Url": "`到`"`中间的链接，即`"Url": "<链接>"`。  
则这段链接就是下载链接。  
**Tips:**每次获得的链接有效期为1小时。

### IOS
#### 第一次使用
1. 打开 https://www.icloud.com/shortcuts/f8d51d1a54b8478a9f49b91331b35ba5。

#### 后续步骤
2. 请下载 快捷指令。
3. 点击链接，按提示操作。

### 网页
1. 打开
> http://tool.chinaz.com/tools/httptest.aspx

#### 后续步骤
2. 如图
![图片](https://xrzyun.coding.net/p/blog/d/cdn/git/raw/web/img/wiki_1.PNG)
 > 1. 将标 1 的地方从左到右，从上到下，依次改为`https://` | `xrzyun.coding.net/open-api` | `POST` | `application/json;charset=utf-8`。
> 2. 将标 2 的地方分别点击。
> 3. 第一个2下面，即 JSON参数设置 ，改为
```
{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 资源码}
```
示例:
```
{"Action": "DescribeIssueFileUrl","ProjectName": "xrz-video","FileId": 22187534}
```
> 4. 将标 3 的地方分别改为
`Authorization`和
```
token 3d81637cf09027ffa006d707419a899e2f3f4cca
```
> 5. 点击 模拟请求 。
3. 如图2
![图片](https://xrzyun.coding.net/p/blog/d/cdn/git/raw/web/img/wiki_2.png)
> 点击 2-1 ，下载链接为`S`与`E`中间的，图上的为
```
http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1605877207%3B1605880807%26q-key-time%3D1605877207%3B1605880807%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D33d77d4e74ef164898a7c9d8fc86cbf99d19e4bb&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Mon%2C%2023%20Nov%202020%2001%3A00%3A07%20GMT
```