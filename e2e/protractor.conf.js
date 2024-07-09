// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
// SIG // Begin signature block
// SIG // MIIrdQYJKoZIhvcNAQcCoIIrZjCCK2ICAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 7gRGNOgyMThF3YUQQbw5guDN82sBgjlFygnqEChJBaag
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAd9zgZcWvjL9DQAC
// SIG // AAAB3zANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjQwMTIwMDEz
// SIG // MzQ0WhcNMjUwMTE5MDEzMzQ0WjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1bnAJpGyFqbK
// SIG // WMrMsnUMskYdi/KuYoGBXMtrw5PMRr1TEQYccGzrCSBH
// SIG // dMGPDe1lP8YJGDJ0rDOL5nNgePQxnawI0iam7MdM3/gy
// SIG // xY6wSE1HnHUYZatFShl/FG1TpINGiHxTS0bOA0qwmWId
// SIG // us8gfKpC/41Jgew4XARIYYDpV0UOCx51L+6n/ol6g7sB
// SIG // c/bVEwIfCRrIC0QStKErEX1AfhSRdislMc5nhVySohMp
// SIG // 7Fs+JKqDPdWoNWMNFPHdHvkYACotxbdXFwPt6ijOiNR9
// SIG // dXvzXSI4e6E4b6wbXxJ4MJcG0xdymTh3YSwRWdfFOL/F
// SIG // Xk5W+K/eN+OgmNvkip0GuwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEOMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUju4tKpnu7Y7YxY8r
// SIG // iI5ZhjOnGwkwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDE5NzAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQCXv2FzUgqF4rS3/1+aXyWaXqd3LI3a
// SIG // pgYIPvCq/vvFzI1sHZuLYi2rCTFDwoJqeTWJ98AuBnnx
// SIG // mMHxe15thTEkdoukFB44oBrugY3VkIeBMBmjaly5F5VD
// SIG // O1sNmdCq0baQi9egwjkzWbghTwMrUhxbJD1q6+qtxAbo
// SIG // jOj+VS4BUiogMXLp5XSaK26wa72UmYm9TiDcxRgELM1E
// SIG // dMraL1uhTqfrqFYYkAqpzoXgtaaZ2T7LO7516KIMjtMY
// SIG // EluNG0ZZbRn8J5TndyGf+N2To+V3nkoYOdks1RIsmK2Y
// SIG // w9ezEjc0DNSSiNO/prQAuw/nmf/oNqTP/daB3Kw6vTau
// SIG // EK0tMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGV8wghlbAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAB33OB
// SIG // lxa+Mv0NAAIAAAHfMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCAaDLcipPVzFheZ/xrOU8IufuZV/PVN5JmNz0ef
// SIG // xfmCazBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAF3Y3Y7feyLW
// SIG // CQ1+1Bv7aw+hdVsUqVsHUyxSfJKJIrS0gLUtluB2Q5x5
// SIG // v8RxWhjLSmKmeBCfq75GW5zx57kRZZC88I4MkrFTW3ll
// SIG // s9auJRGVwfEDNvlKC5blJi46Mok+2Nj+5m5Y/wckhA5K
// SIG // rh52t1vTFbt+Ap40fAOFX3577VPtkCRGcmaEQeCTaioX
// SIG // 0+noh/UUtoWurHnoRJJxQTzJys3fBtQspQs4tshCXf2r
// SIG // YtRHCGj6G2rc2h1KCtKFm09m4TMdQ759zD3+BHXn0gfd
// SIG // NUEFwiMDqDpyJNb1gZ21qe/YMKRR77+UJVCkQx9res4i
// SIG // bdIztq1GudTMpWPPEhenUEqhghcnMIIXIwYKKwYBBAGC
// SIG // NwMDATGCFxMwghcPBgkqhkiG9w0BBwKgghcAMIIW/AIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBVwYLKoZIhvcNAQkQ
// SIG // AQSgggFGBIIBQjCCAT4CAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgyuTUvRV807JDQGnZQyR5faMT
// SIG // 0JdYnuHOBo198xcD4nkCBmZzEgUPUBgRMjAyNDA3MDEy
// SIG // MjAyMTQuM1owBIACAfSggdikgdUwgdIxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVs
// SIG // YW5kIE9wZXJhdGlvbnMgTGltaXRlZDEmMCQGA1UECxMd
// SIG // VGhhbGVzIFRTUyBFU046RDA4Mi00QkZELUVFQkExJTAj
// SIG // BgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZp
// SIG // Y2WgghF4MIIHJzCCBQ+gAwIBAgITMwAAAdzB4IzCX1he
// SIG // jgABAAAB3DANBgkqhkiG9w0BAQsFADB8MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EgMjAxMDAeFw0yMzEwMTIxOTA3MDZa
// SIG // Fw0yNTAxMTAxOTA3MDZaMIHSMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBP
// SIG // cGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxl
// SIG // cyBUU1MgRVNOOkQwODItNEJGRC1FRUJBMSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAi8iz
// SIG // IDWyOD2RIonN6WtRYXlKGphYvzdqafdITknIhU9QLsXq
// SIG // pNwumGEdn2J1/bV/RFoatTwQfJ0Xw3E8xHYpU2IC0IY8
// SIG // lryRXUIa+fdt4YHabaW2aolqcbvWYDLCuQoBNieLAos9
// SIG // AsnTQSRfDlNLB+Yldt2BAsWUfJ8DkqD6lSwlfOq6aQi8
// SIG // SvQNc++m0AaqR0UsrCjgFOUSCe/N5N9e6TNfy9C1MAt9
// SIG // Um5NSBFTvOg/9EVa3dZqBqFnpSWgjQULxeUFANUNfkl4
// SIG // wSzHuOAkN0ScrjhjyAe4RZEOr5Ib1ejQYg6OK5NYPm6/
// SIG // e+USYgDJH/utIW9wufACox2pzL+KpA8yUM5x3QBueI/y
// SIG // JrUFARSd9lPdTHIr2ssH9JGIo/IcOWDyhbBfKK/f5sYH
// SIG // p2Z0zrW6vqdS18N/nWU9wqErhWjzek4TX+eJaVWcQdBX
// SIG // 00nn8NtRKpbZGpNRrY7Yq6+zJEYwSCMYkDXb9KqtGqW8
// SIG // TZ+I3lmZlW2pI9ZohqzHtrQYH591PD6B5GfoyjZLr79t
// SIG // kTBL/QgnmBwoaKc1t/JDXGu9Zc+1fMo5+OSHvmJG5ei6
// SIG // sZU9GqSbPlRjP5HnJswlaP6Z9warPaFdXyJmcJkMGuud
// SIG // mK+cSsIyHkWV+Dzj3qlPSmGNRMfYYKEci8ThINKTaHBY
// SIG // /+4cH2ASzyn/097+a30CAwEAAaOCAUkwggFFMB0GA1Ud
// SIG // DgQWBBToc9IF3Q58Rfe41ax2RKtpQZ7d2zAfBgNVHSME
// SIG // GDAWgBSfpxVdAF5iXYP05dJlpxtTNRnpcjBfBgNVHR8E
// SIG // WDBWMFSgUqBQhk5odHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL2NybC9NaWNyb3NvZnQlMjBUaW1lLVN0
// SIG // YW1wJTIwUENBJTIwMjAxMCgxKS5jcmwwbAYIKwYBBQUH
// SIG // AQEEYDBeMFwGCCsGAQUFBzAChlBodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpb3BzL2NlcnRzL01pY3Jvc29m
// SIG // dCUyMFRpbWUtU3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNy
// SIG // dDAMBgNVHRMBAf8EAjAAMBYGA1UdJQEB/wQMMAoGCCsG
// SIG // AQUFBwMIMA4GA1UdDwEB/wQEAwIHgDANBgkqhkiG9w0B
// SIG // AQsFAAOCAgEA2etvwTCvx5f8fWwq3eufBMPHgCqAduQw
// SIG // 1Cj6RQbAIg1dLfLUZRx2qwr9HWDpN/u03HWrQ2kqTUlO
// SIG // 6lQl8d0TEq2S6EcD7zaVPvIhKn9jvh2onTdEJPhD7yih
// SIG // BdMzPGJ7B8StUu3xZ595udxJPSLrKkq/zukJiTEzbhtu
// SIG // psz9X4zlUGmkJSztH5wROLP/MQDUBtkv++Je0eavIDQI
// SIG // Z34+31z5p2xh+bup7lQydLR/9gmYQQyQSoZcLPIsr52H
// SIG // 5SwWLR3iWR1wT5mrkk2Mgd6xfXDO0ZUC29fQNgNl03ZZ
// SIG // nWST6E4xuVRX8vyfVhbOE//ldCdiXTcB9cSuf7URq3KW
// SIG // J/N3cKEnXG4YbvphtaCJFecO8KLAOq9Ql69VFjWrLjLi
// SIG // +VUppKG1t1+A/IZ54n9hxIE405zQM1NZuMxsvnSp4gQL
// SIG // SUdKkvatFg1W7eGwfMbyfm7kJBqM/DH0/Omxkh4VM0fJ
// SIG // UXqS6MjhWj0287/MXw63jggyPgztRf1lrhDAZ/kHvXHn
// SIG // s6NpfneDFPi/Oge8QFcX2oKYdGBcEttGiYl8OfrRqXO/
// SIG // t2kJVAi5DTrafIhkqexfHO4oVvRONdbDo4WkbVuyNek6
// SIG // jkMweTKyuJvEeivhjPl1mNXIcA3IqjRtKsCVV6KFxobk
// SIG // XvhJlPwW3IcBboiAtznD/cP5HWhsOEpnbVYwggdxMIIF
// SIG // WaADAgECAhMzAAAAFcXna54Cm0mZAAAAAAAVMA0GCSqG
// SIG // SIb3DQEBCwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIw
// SIG // MAYDVQQDEylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0
// SIG // ZSBBdXRob3JpdHkgMjAxMDAeFw0yMTA5MzAxODIyMjVa
// SIG // Fw0zMDA5MzAxODMyMjVaMHwxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1w
// SIG // IFBDQSAyMDEwMIICIjANBgkqhkiG9w0BAQEFAAOCAg8A
// SIG // MIICCgKCAgEA5OGmTOe0ciELeaLL1yR5vQ7VgtP97pwH
// SIG // B9KpbE51yMo1V/YBf2xK4OK9uT4XYDP/XE/HZveVU3Fa
// SIG // 4n5KWv64NmeFRiMMtY0Tz3cywBAY6GB9alKDRLemjkZr
// SIG // BxTzxXb1hlDcwUTIcVxRMTegCjhuje3XD9gmU3w5YQJ6
// SIG // xKr9cmmvHaus9ja+NSZk2pg7uhp7M62AW36MEBydUv62
// SIG // 6GIl3GoPz130/o5Tz9bshVZN7928jaTjkY+yOSxRnOlw
// SIG // aQ3KNi1wjjHINSi947SHJMPgyY9+tVSP3PoFVZhtaDua
// SIG // Rr3tpK56KTesy+uDRedGbsoy1cCGMFxPLOJiss254o2I
// SIG // 5JasAUq7vnGpF1tnYN74kpEeHT39IM9zfUGaRnXNxF80
// SIG // 3RKJ1v2lIH1+/NmeRd+2ci/bfV+AutuqfjbsNkz2K26o
// SIG // ElHovwUDo9Fzpk03dJQcNIIP8BDyt0cY7afomXw/TNuv
// SIG // XsLz1dhzPUNOwTM5TI4CvEJoLhDqhFFG4tG9ahhaYQFz
// SIG // ymeiXtcodgLiMxhy16cg8ML6EgrXY28MyTZki1ugpoMh
// SIG // XV8wdJGUlNi5UPkLiWHzNgY1GIRH29wb0f2y1BzFa/Zc
// SIG // UlFdEtsluq9QBXpsxREdcu+N+VLEhReTwDwV2xo3xwgV
// SIG // GD94q0W29R6HXtqPnhZyacaue7e3PmriLq0CAwEAAaOC
// SIG // Ad0wggHZMBIGCSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYB
// SIG // BAGCNxUCBBYEFCqnUv5kxJq+gpE8RjUpzxD/LwTuMB0G
// SIG // A1UdDgQWBBSfpxVdAF5iXYP05dJlpxtTNRnpcjBcBgNV
// SIG // HSAEVTBTMFEGDCsGAQQBgjdMg30BATBBMD8GCCsGAQUF
// SIG // BwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // b3BzL0RvY3MvUmVwb3NpdG9yeS5odG0wEwYDVR0lBAww
// SIG // CgYIKwYBBQUHAwgwGQYJKwYBBAGCNxQCBAweCgBTAHUA
// SIG // YgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMB
// SIG // Af8wHwYDVR0jBBgwFoAU1fZWy4/oolxiaNE9lJBb186a
// SIG // GMQwVgYDVR0fBE8wTTBLoEmgR4ZFaHR0cDovL2NybC5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMvTWlj
// SIG // Um9vQ2VyQXV0XzIwMTAtMDYtMjMuY3JsMFoGCCsGAQUF
// SIG // BwEBBE4wTDBKBggrBgEFBQcwAoY+aHR0cDovL3d3dy5t
// SIG // aWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNSb29DZXJB
// SIG // dXRfMjAxMC0wNi0yMy5jcnQwDQYJKoZIhvcNAQELBQAD
// SIG // ggIBAJ1VffwqreEsH2cBMSRb4Z5yS/ypb+pcFLY+Tkdk
// SIG // eLEGk5c9MTO1OdfCcTY/2mRsfNB1OW27DzHkwo/7bNGh
// SIG // lBgi7ulmZzpTTd2YurYeeNg2LpypglYAA7AFvonoaeC6
// SIG // Ce5732pvvinLbtg/SHUB2RjebYIM9W0jVOR4U3UkV7nd
// SIG // n/OOPcbzaN9l9qRWqveVtihVJ9AkvUCgvxm2EhIRXT0n
// SIG // 4ECWOKz3+SmJw7wXsFSFQrP8DJ6LGYnn8AtqgcKBGUIZ
// SIG // UnWKNsIdw2FzLixre24/LAl4FOmRsqlb30mjdAy87JGA
// SIG // 0j3mSj5mO0+7hvoyGtmW9I/2kQH2zsZ0/fZMcm8Qq3Uw
// SIG // xTSwethQ/gpY3UA8x1RtnWN0SCyxTkctwRQEcb9k+SS+
// SIG // c23Kjgm9swFXSVRk2XPXfx5bRAGOWhmRaw2fpCjcZxko
// SIG // JLo4S5pu+yFUa2pFEUep8beuyOiJXk+d0tBMdrVXVAmx
// SIG // aQFEfnyhYWxz/gq77EFmPWn9y8FBSX5+k77L+DvktxW/
// SIG // tM4+pTFRhLy/AsGConsXHRWJjXD+57XQKBqJC4822rpM
// SIG // +Zv/Cuk0+CQ1ZyvgDbjmjJnW4SLq8CdCPSWU5nR0W2rR
// SIG // nj7tfqAxM328y+l7vzhwRNGQ8cirOoo6CGJ/2XBjU02N
// SIG // 7oJtpQUQwXEGahC0HVUzWLOhcGbyoYIC1DCCAj0CAQEw
// SIG // ggEAoYHYpIHVMIHSMQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMS0w
// SIG // KwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBPcGVyYXRp
// SIG // b25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxlcyBUU1Mg
// SIG // RVNOOkQwODItNEJGRC1FRUJBMSUwIwYDVQQDExxNaWNy
// SIG // b3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYF
// SIG // Kw4DAhoDFQAcOf9zP7fJGQhQIl9Jsvd2OdASpqCBgzCB
// SIG // gKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMA0G
// SIG // CSqGSIb3DQEBBQUAAgUA6i1hRTAiGA8yMDI0MDcwMjAx
// SIG // MDkyNVoYDzIwMjQwNzAzMDEwOTI1WjB0MDoGCisGAQQB
// SIG // hFkKBAExLDAqMAoCBQDqLWFFAgEAMAcCAQACAhNqMAcC
// SIG // AQACAhLPMAoCBQDqLrLFAgEAMDYGCisGAQQBhFkKBAIx
// SIG // KDAmMAwGCisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAI
// SIG // AgEAAgMBhqAwDQYJKoZIhvcNAQEFBQADgYEAVzCrLXNC
// SIG // 5yZoEHv7Le22zSZ6wI10vIu2MDP21imkC73VRZpNXGr1
// SIG // grK7qCVy1CmCjNNC73QWUN/MbQnC2DX1P6N4R0V1nTuz
// SIG // aQ/TvOD03VbnrCg17ZC28NrTVABCY4ElYehoERTwgC3b
// SIG // t2NlcaHEqKVnzdYb7Xd1DfqGOuOMkd0xggQNMIIECQIB
// SIG // ATCBkzB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQD
// SIG // Ex1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMAIT
// SIG // MwAAAdzB4IzCX1hejgABAAAB3DANBglghkgBZQMEAgEF
// SIG // AKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEE
// SIG // MC8GCSqGSIb3DQEJBDEiBCDbuevZBZe5j7qj+0GIk9fp
// SIG // khWonxd+OwHoWI99isQRGzCB+gYLKoZIhvcNAQkQAi8x
// SIG // geowgecwgeQwgb0EIFOnF4pq2UQ/jLypnOO5YvQ67Qir
// SIG // EQsOFfZMvKXEgg03MIGYMIGApH4wfDELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBIDIwMTACEzMAAAHcweCMwl9YXo4AAQAA
// SIG // AdwwIgQghr09xcpqqA1DIJnBJvC85uuVaPpcxmgUTWvX
// SIG // ynrLpRswDQYJKoZIhvcNAQELBQAEggIAb/m9yNd+LJRv
// SIG // DJrhJCRqJm2LxypCu0maYJ9Qla43jd0ctlDYWAqIeRVO
// SIG // A/eR8iB52pkvY3hvctw/jxU77RySAXw2sWUk/zpZCcux
// SIG // KHDeRBOPZ2ig8yoJuG6mOpAulaX8Xx7AouyOt18Ei+QT
// SIG // InQE4hBF3gKuniQefJB+ob+P6zN+JPDlyzM6jtQdLj1S
// SIG // xMsSJpGkOtk9XiJqms4pxPZSjoh1dbunOWrmDJ7PL1pH
// SIG // UMQTqgR2vmZuRmk9ZJZXvbFEThojVE5gypeB/q0uHG7c
// SIG // AE5K8jl5/bPrxWMTkmOGDfHAkYHoGxuayPm36x7bLF5B
// SIG // dRdmOeZsjuImVMR5NJHbM11TxxRIThPnJbWcKuqkfkLg
// SIG // 5ssNP/VA5jzlCtHw4gwLZg9wuOrGzwwDZdAv+6N4VY2N
// SIG // J3x7VGNTGocoNjMBbIlTYZ2C+zcPx8XwiHnAT7ddRWw0
// SIG // 8zEycRkmCztRCUSF5c+YWrokjJH2+jkhFwkuzo/gHoal
// SIG // HtjQr/2x0olj4KUjdM/Sqn2iAUnZvCicuwd4/wzjGCnP
// SIG // vAqDzIRNUVK9wiFgZVn1dK5ygQEMTafWKXzHveyij35c
// SIG // cUOSG5LnzZWoLRPq0gaWthjOWXAoce7NXxSg9CkxWiGE
// SIG // YrozQHPQRoJ9/V2kcy7UyH7Z51+EdHgUxQ8l894Yff05
// SIG // APllCrbr0l4=
// SIG // End signature block