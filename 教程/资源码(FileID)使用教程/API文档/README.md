
## 接口

#### 接口URL
> https://e.coding.net/open-api

#### 请求方式
> POST

#### Content-Type
> json





#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Content-Type     | application/json |  必填 | - |
| Aceept     | application/json |  选填 | - |
| Authorization     | Bearer 3d81637cf09027ffa006d707419a899e2f3f4cca |  选填 | 认证，与Body中的二选一。 |

#### 请求Body参数

```javascript
{
	"Action": "DescribeIssueFileUrl",
	"ProjectName": "xrz-video",
	"FileId": 22187534,
	"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"
}
```
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Action     | DescribeIssueFileUrl |  必填 | - |
| ProjectName     | xrz-video |  必填 | - |
| FileId     | 22187534 |  必填 | - |
| Authorization     | 3d81637cf09027ffa006d707419a899e2f3f4cca |  选填 | 认证，与Header中的二选一。 |

#### 成功响应示例
```javascript
{
	"Response": {
		"RequestId": "32e830c4-d129-c633-fd0b-f7a84fef7d5f",
		"Url": "http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1613638762%3B1613642362%26q-key-time%3D1613638762%3B1613642362%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D69dce2059e0484afe39c490151f79065ab8cefe1&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sat%2C%2020%20Feb%202021%2020%3A59%3A22%20GMT"
	}
}
```

| 参数        | 示例值   |  参数描述  |
| :--------   | :-----  | :----  |
| Response     | - | - |
| Response.RequestId     | 32e830c4-d129-c633-fd0b-f7a84fef7d5f | - |
| Response.Url     | http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/5e7ad2c0-271b-11eb-bcc2-256bb590ce3f.zip?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1613638762%3B1613642362%26q-key-time%3D1613638762%3B1613642362%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D69dce2059e0484afe39c490151f79065ab8cefe1&response-content-disposition=attachment%3Bfilename%3DAndroidCarrierClassTools_v2.0_20170109-20201115162006.zip&response-expires=Sat%2C%2020%20Feb%202021%2020%3A59%3A22%20GMT | - |


## 获取同季所有文件

#### 接口URL
> https://e.coding.net/open-api

#### 请求方式
> POST

#### Content-Type
> json





#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Content-Type     | application/json |  必填 | - |
| Aceept     | application/json |  选填 | - |
| Authorization     | Bearer 3d81637cf09027ffa006d707419a899e2f3f4cca |  选填 | 认证，与Body中的二选一。 |

#### 请求Body参数

```javascript
{
	"Action": "DescribeIssue",
	"ProjectName": "xrz-video",
	"IssueCode": 161,
	"Authorization": "3d81637cf09027ffa006d707419a899e2f3f4cca"
}
```
| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Action     | DescribeIssueFileUrl |  必填 | - |
| ProjectName     | xrz-video |  必填 | - |
| FileId     | 22187534 |  必填 | - |
| Authorization     | 3d81637cf09027ffa006d707419a899e2f3f4cca |  选填 | 认证，与Header中的二选一。 |

#### 成功响应示例
```javascript
{
	"Response": {
		"RequestId": "d8397ff4-bff4-b4bf-8c0c-75b527af7568",
		"Issue": {
			"Epic": {
				"Code": 0,
				"Type": "",
				"Name": "",
				"IssueStatusId": 0,
				"IssueStatusName": "",
				"Priority": "",
				"Assignee": {
					"Id": 0,
					"Status": 0,
					"Avatar": "",
					"Name": "",
					"Email": "",
					"TeamId": 0,
					"Phone": "",
					"GlobalKey": "",
					"TeamGlobalKey": ""
				}
			},
			"ParentType": "MISSION",
			"Code": 161,
			"Type": "SUB_TASK",
			"Name": "Re：从零开始的异世界生活 第二季 后半",
			"Description": "",
			"IterationId": 0,
			"IssueStatusId": 41386782,
			"IssueStatusName": "处理中",
			"IssueStatusType": "PROCESSING",
			"Priority": "2",
			"Assignee": {
				"Id": 8043233,
				"Status": 2,
				"Avatar": "https://coding-net-production-static-ci.codehub.cn/WM-TEXT-AVATAR-yrupahnmuxzzbCuYcPuF.jpg",
				"Name": "API",
				"Email": "",
				"TeamId": 0,
				"Phone": "",
				"GlobalKey": "",
				"TeamGlobalKey": ""
			},
			"StartDate": 0,
			"DueDate": 0,
			"WorkingHours": 0,
			"Creator": {
				"Id": 7940597,
				"Status": 2,
				"Avatar": "https://coding-net-production-static-ci.codehub.cn/WM-TEXT-AVATAR-szESMHhMIPOxmZJWRfPJ.jpg",
				"Name": "xrz",
				"Email": "",
				"TeamId": 0,
				"Phone": "",
				"GlobalKey": "",
				"TeamGlobalKey": ""
			},
			"StoryPoint": "",
			"CreatedAt": 1610639872000,
			"UpdatedAt": 1612977661000,
			"CompletedAt": 0,
			"ProjectModule": {
				"Id": 0,
				"Name": ""
			},
			"Watchers": [
				{
					"Id": 7940597,
					"Status": 2,
					"Avatar": "https://coding-net-production-static-ci.codehub.cn/WM-TEXT-AVATAR-szESMHhMIPOxmZJWRfPJ.jpg",
					"Name": "xrz",
					"Email": "",
					"TeamId": 0,
					"Phone": "",
					"GlobalKey": "",
					"TeamGlobalKey": ""
				}
			],
			"Labels": [],
			"Files": [
				{
					"FileId": 22740607,
					"Name": "re0-2-14-20210114235822.flv",
					"Type": 3,
					"Size": 201376293,
					"Url": "http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/53ea8360-5681-11eb-9864-dd9f2e62fb7b.flv?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1613656622%3B1613660222%26q-key-time%3D1613656622%3B1613660222%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D303ff773ec2e15d0daf5b115f635d858dc9c80f8&response-content-disposition=attachment%3Bfilename%3Dre0-2-14-20210114235822.flv&response-expires=Sun%2C%2021%20Feb%202021%2001%3A57%3A02%20GMT"
				}
			],
			"RequirementType": {
				"Id": 0,
				"Name": ""
			},
			"DefectType": {
				"Id": 0,
				"Name": "",
				"IconUrl": ""
			},
			"CustomFields": [],
			"ThirdLinks": [],
			"SubTasks": [],
			"Parent": {
				"Code": 151,
				"Type": "MISSION",
				"Name": "2021.1",
				"IssueStatusId": 41386782,
				"IssueStatusName": "处理中",
				"Priority": "0",
				"Assignee": {
					"Id": 8043233,
					"Status": 2,
					"Avatar": "https://coding-net-production-static-ci.codehub.cn/WM-TEXT-AVATAR-yrupahnmuxzzbCuYcPuF.jpg",
					"Name": "API",
					"Email": "",
					"TeamId": 0,
					"Phone": "",
					"GlobalKey": "",
					"TeamGlobalKey": ""
				},
				"IssueStatusType": "PROCESSING"
			}
		}
	}
}
```

| 参数        | 示例值   |  参数描述  |
| :--------   | :-----  | :----  |
| Response.Issue.Files     | - | 文件 |
| Response.Issue.Files.FileId     | 22740607 | 资源码 |
| Response.Issue.Files.Name     | re0-2-14-20210114235822.flv | 文件名 |
| Response.Issue.Files.Type     | 3 | 3-二进制文件 |
| Response.Issue.Files.Size     | 201376293 | 文件大小 |
| Response.Issue.Files.Url     | http://coding-net-production-file-1257242599.cos.ap-shanghai.myqcloud.com/53ea8360-5681-11eb-9864-dd9f2e62fb7b.flv?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDay83lFmaS6Y4LTdzMVO1SdZOyJSNOYpr%26q-sign-time%3D1613656622%3B1613660222%26q-key-time%3D1613656622%3B1613660222%26q-header-list%3D%26q-url-param-list%3Dresponse-content-disposition%3Bresponse-expires%26q-signature%3D303ff773ec2e15d0daf5b115f635d858dc9c80f8&response-content-disposition=attachment%3Bfilename%3Dre0-2-14-20210114235822.flv&response-expires=Sun%2C%2021%20Feb%202021%2001%3A57%3A02%20GMT | 下载链接 |

