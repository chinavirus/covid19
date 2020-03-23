$(document).ready(function(){
    var mavn = $("#_tinhvn").val();
    getInfoByMa(mavn);
});
function getInfoByMa(ma){
var url = 'https://cors-anywhere.herokuapp.com/https://ncov.moh.gov.vn/web/guest/trang-chu?p_p_id=congbothongke_WAR_coronadvcportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getItemByMa&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=6';
return $.ajax({
url: url,
type: 'POST',
headers: {
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'vi,vi-VN;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6,fr-FR;q=0.5',
        'content-length': '3960',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        'origin': 'https://ncov.moh.gov.vn',
        'referer': 'https://ncov.moh.gov.vn/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
},
datatype: 'json',
data: {
    _congbothongke_WAR_coronadvcportlet_ma : ma,
    _congbothongke_WAR_coronadvcportlet_jsonData : '[{"name":"Ha Noi","ma":"01","soCaNhiem":"23 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"name":"aaaaa","ma":"","soCaNhiem":"20","tuVong":"0","nghiNhiem":"120"},{"name":"bbb","ma":"","soCaNhiem":"20","tuVong":"0","nghiNhiem":"120"},{"ma":"02","soCaNhiem":"0","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"--Chọn địa phương--","soCaNhiem":"","tuVong":"","nghiNhiem":""},{"ma":"VNALL","soCaNhiem":"91 ","tuVong":"0","nghiNhiem":"196 ","binhPhuc":"17","cachLy":"15.546"},{"ma":"79","soCaNhiem":"18 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"3 ","cachLy":""},{"ma":"26","soCaNhiem":"11","tuVong":"0","nghiNhiem":"0","binhPhuc":"10","cachLy":""},{"ma":"38","soCaNhiem":"1","tuVong":"0","nghiNhiem":"0","binhPhuc":"1","cachLy":""},{"ma":"56","soCaNhiem":"1","tuVong":"0","nghiNhiem":"0","binhPhuc":"1","cachLy":""},{"ma":"08","soCaNhiem":"0","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"22","soCaNhiem":"4 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"46","soCaNhiem":"1 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"10","soCaNhiem":"2","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"37","soCaNhiem":"1 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"48","soCaNhiem":"3 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"49","soCaNhiem":"2 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"60","soCaNhiem":"9 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"30","soCaNhiem":"1 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"},{"ma":"58","soCaNhiem":"1 ","tuVong":"0","nghiNhiem":"0","binhPhuc":"0","cachLy":"0"}]'
},
success: function(data) {
    var datas = JSON.parse(data);
    console.log(datas);
}
});
}     
