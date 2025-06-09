const base = {
    get() {
                return {
            url : "http://localhost:8080/kaoyantushudianzishangwupingtai/",
            name: "kaoyantushudianzishangwupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kaoyantushudianzishangwupingtai/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "考研图书电子商务平台"
        } 
    }
}
export default base
