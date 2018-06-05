//select 'menu.options[i++] = new Option("'||codedisp||'","'||codecode||'");'
//from city_code  order by codecode

function getCityCode(menu, all)
{
    var i=0;

    if (all)
    {
        menu.options[i++] = new Option("全國","0000000000");
    }
    else
    {
        menu.options[i++] = new Option("","");
    }

	menu.options[i++] = new Option("桃園市","6800000000");
	menu.options[i++] = new Option("臺南市","6700000000");
	menu.options[i++] = new Option("臺中市","6600000000");
	menu.options[i++] = new Option("新北市","6500000000");
	menu.options[i++] = new Option("高雄市","6400000000");
	menu.options[i++] = new Option("臺北市","6300000000");
	menu.options[i++] = new Option("嘉義市","1002000000");
	menu.options[i++] = new Option("新竹市","1001800000");
	menu.options[i++] = new Option("基隆市","1001700000");
	menu.options[i++] = new Option("澎湖縣","1001600000");
	menu.options[i++] = new Option("花蓮縣","1001500000");
	menu.options[i++] = new Option("臺東縣","1001400000");
	menu.options[i++] = new Option("屏東縣","1001300000");
	menu.options[i++] = new Option("嘉義縣","1001000000");
	menu.options[i++] = new Option("雲林縣","1000900000");
	menu.options[i++] = new Option("南投縣","1000800000");
	menu.options[i++] = new Option("彰化縣","1000700000");
	menu.options[i++] = new Option("苗栗縣","1000500000");
	menu.options[i++] = new Option("新竹縣","1000400000");
	menu.options[i++] = new Option("宜蘭縣","1000200000");
	menu.options[i++] = new Option("金門縣","0902000000");
	menu.options[i++] = new Option("連江縣","0900700000");
}

//select 'menu.options[i++] = new Option("'||codedisp||'","'||codecode||'");'
//from town_code  where cityCode='xxxxxxxxxx' order by codecode

function getTownCode(city, menu)
{
    var k;

    for ( k = menu.options.length-1; k >= 0; k-- )
    menu.options[k] = null;

    var i=0;
    var oriMenu = menu;
    menu.options[i++] = new Option("　　　","");

    if (city=="6300000000")
    {
        menu.options[i++] = new Option("松山區","6300100000");
        menu.options[i++] = new Option("信義區","6300200000");
        menu.options[i++] = new Option("大安區","6300300000");
        menu.options[i++] = new Option("中山區","6300400000");
        menu.options[i++] = new Option("中正區","6300500000");
        menu.options[i++] = new Option("大同區","6300600000");
        menu.options[i++] = new Option("萬華區","6300700000");
        menu.options[i++] = new Option("文山區","6300800000");
        menu.options[i++] = new Option("南港區","6300900000");
        menu.options[i++] = new Option("內湖區","6301000000");
        menu.options[i++] = new Option("士林區","6301100000");
        menu.options[i++] = new Option("北投區","6301200000");
    }
    else if (city=="6400000000")
    {
        menu.options[i++] = new Option("鹽埕區","6400100000");
        menu.options[i++] = new Option("鼓山區","6400200000");
        menu.options[i++] = new Option("左營區","6400300000");
        menu.options[i++] = new Option("楠梓區","6400400000");
        menu.options[i++] = new Option("三民區","6400500000");
        menu.options[i++] = new Option("新興區","6400600000");
        menu.options[i++] = new Option("前金區","6400700000");
        menu.options[i++] = new Option("苓雅區","6400800000");
        menu.options[i++] = new Option("前鎮區","6400900000");
        menu.options[i++] = new Option("旗津區","6401000000");
        menu.options[i++] = new Option("小港區","6401100000");
		menu.options[i++] = new Option("鳳山區","6401200000");
		menu.options[i++] = new Option("林園區","6401300000");
		menu.options[i++] = new Option("大寮區","6401400000");
		menu.options[i++] = new Option("大樹區","6401500000");
		menu.options[i++] = new Option("大社區","6401600000");
		menu.options[i++] = new Option("仁武區","6401700000");
		menu.options[i++] = new Option("鳥松區","6401800000");
		menu.options[i++] = new Option("岡山區","6401900000");
		menu.options[i++] = new Option("橋頭區","6402000000");
		menu.options[i++] = new Option("燕巢區","6402100000");
		menu.options[i++] = new Option("田寮區","6402200000");
		menu.options[i++] = new Option("阿蓮區","6402300000");
		menu.options[i++] = new Option("路竹區","6402400000");
		menu.options[i++] = new Option("湖內區","6402500000");
		menu.options[i++] = new Option("茄萣區","6402600000");
		menu.options[i++] = new Option("永安區","6402700000");
		menu.options[i++] = new Option("彌陀區","6402800000");
		menu.options[i++] = new Option("梓官區","6402900000");
		menu.options[i++] = new Option("旗山區","6403000000");
		menu.options[i++] = new Option("美濃區","6403100000");
		menu.options[i++] = new Option("六龜區","6403200000");
		menu.options[i++] = new Option("甲仙區","6403300000");
		menu.options[i++] = new Option("杉林區","6403400000");
		menu.options[i++] = new Option("內門區","6403500000");
		menu.options[i++] = new Option("茂林區","6403600000");
		menu.options[i++] = new Option("桃源區","6403700000");
		menu.options[i++] = new Option("那瑪夏區","6403800000");
    }
    else if (city=="6500000000")
    {
	    menu.options[i++] = new Option("板橋區","6500100000");
		menu.options[i++] = new Option("三重區","6500200000");
		menu.options[i++] = new Option("中和區","6500300000");
		menu.options[i++] = new Option("永和區","6500400000");
		menu.options[i++] = new Option("新莊區","6500500000");
		menu.options[i++] = new Option("新店區","6500600000");
		menu.options[i++] = new Option("樹林區","6500700000");
		menu.options[i++] = new Option("鶯歌區","6500800000");
		menu.options[i++] = new Option("三峽區","6500900000");
		menu.options[i++] = new Option("淡水區","6501000000");
		menu.options[i++] = new Option("汐止區","6501100000");
		menu.options[i++] = new Option("瑞芳區","6501200000");
		menu.options[i++] = new Option("土城區","6501300000");
		menu.options[i++] = new Option("蘆洲區","6501400000");
		menu.options[i++] = new Option("五股區","6501500000");
		menu.options[i++] = new Option("泰山區","6501600000");
		menu.options[i++] = new Option("林口區","6501700000");
		menu.options[i++] = new Option("深坑區","6501800000");
		menu.options[i++] = new Option("石碇區","6501900000");
		menu.options[i++] = new Option("坪林區","6502000000");
		menu.options[i++] = new Option("三芝區","6502100000");
		menu.options[i++] = new Option("石門區","6502200000");
		menu.options[i++] = new Option("八里區","6502300000");
		menu.options[i++] = new Option("平溪區","6502400000");
		menu.options[i++] = new Option("雙溪區","6502500000");
		menu.options[i++] = new Option("貢寮區","6502600000");
		menu.options[i++] = new Option("金山區","6502700000");
		menu.options[i++] = new Option("萬里區","6502800000");
		menu.options[i++] = new Option("烏來區","6502900000");
    }
    else if (city=="6600000000")
    {
		menu.options[i++] = new Option("中區","6600100000");
		menu.options[i++] = new Option("東區","6600200000");
		menu.options[i++] = new Option("南區","6600300000");
		menu.options[i++] = new Option("西區","6600400000");
		menu.options[i++] = new Option("北區","6600500000");
		menu.options[i++] = new Option("西屯區","6600600000");
		menu.options[i++] = new Option("南屯區","6600700000");
		menu.options[i++] = new Option("北屯區","6600800000");
		menu.options[i++] = new Option("豐原區","6600900000");
		menu.options[i++] = new Option("東勢區","6601000000");
		menu.options[i++] = new Option("大甲區","6601100000");
		menu.options[i++] = new Option("清水區","6601200000");
		menu.options[i++] = new Option("沙鹿區","6601300000");
		menu.options[i++] = new Option("梧棲區","6601400000");
		menu.options[i++] = new Option("后里區","6601500000");
		menu.options[i++] = new Option("神岡區","6601600000");
		menu.options[i++] = new Option("潭子區","6601700000");
		menu.options[i++] = new Option("大雅區","6601800000");
		menu.options[i++] = new Option("新社區","6601900000");
		menu.options[i++] = new Option("石岡區","6602000000");
		menu.options[i++] = new Option("外埔區","6602100000");
		menu.options[i++] = new Option("大安區","6602200000");
		menu.options[i++] = new Option("烏日區","6602300000");
		menu.options[i++] = new Option("大肚區","6602400000");
		menu.options[i++] = new Option("龍井區","6602500000");
		menu.options[i++] = new Option("霧峰區","6602600000");
		menu.options[i++] = new Option("太平區","6602700000");
		menu.options[i++] = new Option("大里區","6602800000");
		menu.options[i++] = new Option("和平區","6602900000");
    }
    else if (city=="6700000000")
    {
		menu.options[i++] = new Option("新營區","6700100000");
		menu.options[i++] = new Option("鹽水區","6700200000");
		menu.options[i++] = new Option("白河區","6700300000");
		menu.options[i++] = new Option("柳營區","6700400000");
		menu.options[i++] = new Option("後壁區","6700500000");
		menu.options[i++] = new Option("東山區","6700600000");
		menu.options[i++] = new Option("麻豆區","6700700000");
		menu.options[i++] = new Option("下營區","6700800000");
		menu.options[i++] = new Option("六甲區","6700900000");
		menu.options[i++] = new Option("官田區","6701000000");
		menu.options[i++] = new Option("大內區","6701100000");
		menu.options[i++] = new Option("佳里區","6701200000");
		menu.options[i++] = new Option("學甲區","6701300000");
		menu.options[i++] = new Option("西港區","6701400000");
		menu.options[i++] = new Option("七股區","6701500000");
		menu.options[i++] = new Option("將軍區","6701600000");
		menu.options[i++] = new Option("北門區","6701700000");
		menu.options[i++] = new Option("新化區","6701800000");
		menu.options[i++] = new Option("善化區","6701900000");
		menu.options[i++] = new Option("新市區","6702000000");
		menu.options[i++] = new Option("安定區","6702100000");
		menu.options[i++] = new Option("山上區","6702200000");
		menu.options[i++] = new Option("玉井區","6702300000");
		menu.options[i++] = new Option("楠西區","6702400000");
		menu.options[i++] = new Option("南化區","6702500000");
		menu.options[i++] = new Option("左鎮區","6702600000");
		menu.options[i++] = new Option("仁德區","6702700000");
		menu.options[i++] = new Option("歸仁區","6702800000");
		menu.options[i++] = new Option("關廟區","6702900000");
		menu.options[i++] = new Option("龍崎區","6703000000");
		menu.options[i++] = new Option("永康區","6703100000");
		menu.options[i++] = new Option("東區","6703200000");
		menu.options[i++] = new Option("南區","6703300000");
		menu.options[i++] = new Option("北區","6703400000");
		menu.options[i++] = new Option("安南區","6703500000");
		menu.options[i++] = new Option("安平區","6703600000");
		menu.options[i++] = new Option("中西區","6703700000");
    }
    else if (city=="1000100000")
    {
        menu.options[i++] = new Option("板橋市","1000101000");
        menu.options[i++] = new Option("三重市","1000102000");
        menu.options[i++] = new Option("中和市","1000103000");
        menu.options[i++] = new Option("永和市","1000104000");
        menu.options[i++] = new Option("新莊市","1000105000");
        menu.options[i++] = new Option("新店市","1000106000");
        menu.options[i++] = new Option("樹林市","1000107000");
        menu.options[i++] = new Option("鶯歌鎮","1000108000");
        menu.options[i++] = new Option("三峽鎮","1000109000");
        menu.options[i++] = new Option("淡水鎮","1000110000");
        menu.options[i++] = new Option("汐止市","1000111000");
        menu.options[i++] = new Option("瑞芳鎮","1000112000");
        menu.options[i++] = new Option("土城市","1000113000");
        menu.options[i++] = new Option("蘆洲市","1000114000");
        menu.options[i++] = new Option("五股鄉","1000115000");
        menu.options[i++] = new Option("泰山鄉","1000116000");
        menu.options[i++] = new Option("林口鄉","1000117000");
        menu.options[i++] = new Option("深坑鄉","1000118000");
        menu.options[i++] = new Option("石碇鄉","1000119000");
        menu.options[i++] = new Option("坪林鄉","1000120000");
        menu.options[i++] = new Option("三芝鄉","1000121000");
        menu.options[i++] = new Option("石門鄉","1000122000");
        menu.options[i++] = new Option("八里鄉","1000123000");
        menu.options[i++] = new Option("平溪鄉","1000124000");
        menu.options[i++] = new Option("雙溪鄉","1000125000");
        menu.options[i++] = new Option("貢寮鄉","1000126000");
        menu.options[i++] = new Option("金山鄉","1000127000");
        menu.options[i++] = new Option("萬里鄉","1000128000");
        menu.options[i++] = new Option("烏來鄉","1000129000");
    }
    else if (city=="1000200000")
    {
        menu.options[i++] = new Option("宜蘭市","1000201000");
        menu.options[i++] = new Option("羅東鎮","1000202000");
        menu.options[i++] = new Option("蘇澳鎮","1000203000");
        menu.options[i++] = new Option("頭城鎮","1000204000");
        menu.options[i++] = new Option("礁溪鄉","1000205000");
        menu.options[i++] = new Option("壯圍鄉","1000206000");
        menu.options[i++] = new Option("員山鄉","1000207000");
        menu.options[i++] = new Option("冬山鄉","1000208000");
        menu.options[i++] = new Option("五結鄉","1000209000");
        menu.options[i++] = new Option("三星鄉","1000210000");
        menu.options[i++] = new Option("大同鄉","1000211000");
        menu.options[i++] = new Option("南澳鄉","1000212000");
    }
    else if (city=="6800000000")
    {
		menu.options[i++] = new Option("桃園區","6800100000");
		menu.options[i++] = new Option("中壢區","6800200000");
		menu.options[i++] = new Option("大溪區","6800300000");
		menu.options[i++] = new Option("楊梅區","6800400000");
		menu.options[i++] = new Option("蘆竹區","6800500000");
		menu.options[i++] = new Option("大園區","6800600000");
		menu.options[i++] = new Option("龜山區","6800700000");
		menu.options[i++] = new Option("八德區","6800800000");
		menu.options[i++] = new Option("龍潭區","6800900000");
		menu.options[i++] = new Option("平鎮區","6801000000");
		menu.options[i++] = new Option("新屋區","6801100000");
		menu.options[i++] = new Option("觀音區","6801200000");
		menu.options[i++] = new Option("復興區","6801300000");
    }
    else if (city=="1000400000")
    {
        menu.options[i++] = new Option("竹北市","1000401000");
        menu.options[i++] = new Option("竹東鎮","1000402000");
        menu.options[i++] = new Option("新埔鎮","1000403000");
        menu.options[i++] = new Option("關西鎮","1000404000");
        menu.options[i++] = new Option("湖口鄉","1000405000");
        menu.options[i++] = new Option("新豐鄉","1000406000");
        menu.options[i++] = new Option("芎林鄉","1000407000");
        menu.options[i++] = new Option("橫山鄉","1000408000");
        menu.options[i++] = new Option("北埔鄉","1000409000");
        menu.options[i++] = new Option("寶山鄉","1000410000");
        menu.options[i++] = new Option("峨眉鄉","1000411000");
        menu.options[i++] = new Option("尖石鄉","1000412000");
        menu.options[i++] = new Option("五峰鄉","1000413000");
    }
    else if (city=="1000500000")
    {
        menu.options[i++] = new Option("苗栗市","1000501000");
        menu.options[i++] = new Option("苑裡鎮","1000502000");
        menu.options[i++] = new Option("通霄鎮","1000503000");
        menu.options[i++] = new Option("竹南鎮","1000504000");
        menu.options[i++] = new Option("頭份市","1000505000");
        menu.options[i++] = new Option("後龍鎮","1000506000");
        menu.options[i++] = new Option("卓蘭鎮","1000507000");
        menu.options[i++] = new Option("大湖鄉","1000508000");
        menu.options[i++] = new Option("公館鄉","1000509000");
        menu.options[i++] = new Option("銅鑼鄉","1000510000");
        menu.options[i++] = new Option("南庄鄉","1000511000");
        menu.options[i++] = new Option("頭屋鄉","1000512000");
        menu.options[i++] = new Option("三義鄉","1000513000");
        menu.options[i++] = new Option("西湖鄉","1000514000");
        menu.options[i++] = new Option("造橋鄉","1000515000");
        menu.options[i++] = new Option("三灣鄉","1000516000");
        menu.options[i++] = new Option("獅潭鄉","1000517000");
        menu.options[i++] = new Option("泰安鄉","1000518000");
    }
    else if (city=="1000600000")
    {
        menu.options[i++] = new Option("豐原市","1000601000");
        menu.options[i++] = new Option("東勢鎮","1000602000");
        menu.options[i++] = new Option("大甲鎮","1000603000");
        menu.options[i++] = new Option("清水鎮","1000604000");
        menu.options[i++] = new Option("沙鹿鎮","1000605000");
        menu.options[i++] = new Option("梧棲鎮","1000606000");
        menu.options[i++] = new Option("后里鄉","1000607000");
        menu.options[i++] = new Option("神岡鄉","1000608000");
        menu.options[i++] = new Option("潭子鄉","1000609000");
        menu.options[i++] = new Option("大雅鄉","1000610000");
        menu.options[i++] = new Option("新社鄉","1000611000");
        menu.options[i++] = new Option("石岡鄉","1000612000");
        menu.options[i++] = new Option("外埔鄉","1000613000");
        menu.options[i++] = new Option("大安鄉","1000614000");
        menu.options[i++] = new Option("烏日鄉","1000615000");
        menu.options[i++] = new Option("大肚鄉","1000616000");
        menu.options[i++] = new Option("龍井鄉","1000617000");
        menu.options[i++] = new Option("霧峰鄉","1000618000");
        menu.options[i++] = new Option("太平市","1000619000");
        menu.options[i++] = new Option("大里市","1000620000");
        menu.options[i++] = new Option("和平鄉","1000621000");
    }
    else if (city=="1000700000")
    {
        menu.options[i++] = new Option("彰化市","1000701000");
        menu.options[i++] = new Option("鹿港鎮","1000702000");
        menu.options[i++] = new Option("和美鎮","1000703000");
        menu.options[i++] = new Option("線西鄉","1000704000");
        menu.options[i++] = new Option("伸港鄉","1000705000");
        menu.options[i++] = new Option("福興鄉","1000706000");
        menu.options[i++] = new Option("秀水鄉","1000707000");
        menu.options[i++] = new Option("花壇鄉","1000708000");
        menu.options[i++] = new Option("芬園鄉","1000709000");
        menu.options[i++] = new Option("員林市","1000710000");
        menu.options[i++] = new Option("溪湖鎮","1000711000");
        menu.options[i++] = new Option("田中鎮","1000712000");
        menu.options[i++] = new Option("大村鄉","1000713000");
        menu.options[i++] = new Option("埔鹽鄉","1000714000");
        menu.options[i++] = new Option("埔心鄉","1000715000");
        menu.options[i++] = new Option("永靖鄉","1000716000");
        menu.options[i++] = new Option("社頭鄉","1000717000");
        menu.options[i++] = new Option("二水鄉","1000718000");
        menu.options[i++] = new Option("北斗鎮","1000719000");
        menu.options[i++] = new Option("二林鎮","1000720000");
        menu.options[i++] = new Option("田尾鄉","1000721000");
        menu.options[i++] = new Option("埤頭鄉","1000722000");
        menu.options[i++] = new Option("芳苑鄉","1000723000");
        menu.options[i++] = new Option("大城鄉","1000724000");
        menu.options[i++] = new Option("竹塘鄉","1000725000");
        menu.options[i++] = new Option("溪州鄉","1000726000");
    }
    else if (city=="1000800000")
    {
        menu.options[i++] = new Option("南投市","1000801000");
        menu.options[i++] = new Option("埔里鎮","1000802000");
        menu.options[i++] = new Option("草屯鎮","1000803000");
        menu.options[i++] = new Option("竹山鎮","1000804000");
        menu.options[i++] = new Option("集集鎮","1000805000");
        menu.options[i++] = new Option("名間鄉","1000806000");
        menu.options[i++] = new Option("鹿谷鄉","1000807000");
        menu.options[i++] = new Option("中寮鄉","1000808000");
        menu.options[i++] = new Option("魚池鄉","1000809000");
        menu.options[i++] = new Option("國姓鄉","1000810000");
        menu.options[i++] = new Option("水里鄉","1000811000");
        menu.options[i++] = new Option("信義鄉","1000812000");
        menu.options[i++] = new Option("仁愛鄉","1000813000");
    }
    else if (city=="1000900000")
    {
        menu.options[i++] = new Option("斗六市","1000901000");
        menu.options[i++] = new Option("斗南鎮","1000902000");
        menu.options[i++] = new Option("虎尾鎮","1000903000");
        menu.options[i++] = new Option("西螺鎮","1000904000");
        menu.options[i++] = new Option("土庫鎮","1000905000");
        menu.options[i++] = new Option("北港鎮","1000906000");
        menu.options[i++] = new Option("古坑鄉","1000907000");
        menu.options[i++] = new Option("大埤鄉","1000908000");
        menu.options[i++] = new Option("莿桐鄉","1000909000");
        menu.options[i++] = new Option("林內鄉","1000910000");
        menu.options[i++] = new Option("二崙鄉","1000911000");
        menu.options[i++] = new Option("崙背鄉","1000912000");
        menu.options[i++] = new Option("麥寮鄉","1000913000");
        menu.options[i++] = new Option("東勢鄉","1000914000");
        menu.options[i++] = new Option("褒忠鄉","1000915000");
        menu.options[i++] = new Option("臺西鄉","1000916000");
        menu.options[i++] = new Option("元長鄉","1000917000");
        menu.options[i++] = new Option("四湖鄉","1000918000");
        menu.options[i++] = new Option("口湖鄉","1000919000");
        menu.options[i++] = new Option("水林鄉","1000920000");
    }
    else if (city=="1001000000")
    {
        menu.options[i++] = new Option("太保市","1001001000");
        menu.options[i++] = new Option("朴子市","1001002000");
        menu.options[i++] = new Option("布袋鎮","1001003000");
        menu.options[i++] = new Option("大林鎮","1001004000");
        menu.options[i++] = new Option("民雄鄉","1001005000");
        menu.options[i++] = new Option("溪口鄉","1001006000");
        menu.options[i++] = new Option("新港鄉","1001007000");
        menu.options[i++] = new Option("六腳鄉","1001008000");
        menu.options[i++] = new Option("東石鄉","1001009000");
        menu.options[i++] = new Option("義竹鄉","1001010000");
        menu.options[i++] = new Option("鹿草鄉","1001011000");
        menu.options[i++] = new Option("水上鄉","1001012000");
        menu.options[i++] = new Option("中埔鄉","1001013000");
        menu.options[i++] = new Option("竹崎鄉","1001014000");
        menu.options[i++] = new Option("梅山鄉","1001015000");
        menu.options[i++] = new Option("番路鄉","1001016000");
        menu.options[i++] = new Option("大埔鄉","1001017000");
        menu.options[i++] = new Option("阿里山鄉","1001018000");
    }
    else if (city=="1001100000")
    {
        menu.options[i++] = new Option("新營市","1001101000");
        menu.options[i++] = new Option("鹽水鎮","1001102000");
        menu.options[i++] = new Option("白河鎮","1001103000");
        menu.options[i++] = new Option("柳營鄉","1001104000");
        menu.options[i++] = new Option("後壁鄉","1001105000");
        menu.options[i++] = new Option("東山鄉","1001106000");
        menu.options[i++] = new Option("麻豆鎮","1001107000");
        menu.options[i++] = new Option("下營鄉","1001108000");
        menu.options[i++] = new Option("六甲鄉","1001109000");
        menu.options[i++] = new Option("官田鄉","1001110000");
        menu.options[i++] = new Option("大內鄉","1001111000");
        menu.options[i++] = new Option("佳里鎮","1001112000");
        menu.options[i++] = new Option("學甲鎮","1001113000");
        menu.options[i++] = new Option("西港鄉","1001114000");
        menu.options[i++] = new Option("七股鄉","1001115000");
        menu.options[i++] = new Option("將軍鄉","1001116000");
        menu.options[i++] = new Option("北門鄉","1001117000");
        menu.options[i++] = new Option("新化鎮","1001118000");
        menu.options[i++] = new Option("善化鎮","1001119000");
        menu.options[i++] = new Option("新市鄉","1001120000");
        menu.options[i++] = new Option("安定鄉","1001121000");
        menu.options[i++] = new Option("山上鄉","1001122000");
        menu.options[i++] = new Option("玉井鄉","1001123000");
        menu.options[i++] = new Option("楠西鄉","1001124000");
        menu.options[i++] = new Option("南化鄉","1001125000");
        menu.options[i++] = new Option("左鎮鄉","1001126000");
        menu.options[i++] = new Option("仁德鄉","1001127000");
        menu.options[i++] = new Option("歸仁鄉","1001128000");
        menu.options[i++] = new Option("關廟鄉","1001129000");
        menu.options[i++] = new Option("龍崎鄉","1001130000");
        menu.options[i++] = new Option("永康市","1001131000");
    }
    else if (city=="1001200000")
    {
        menu.options[i++] = new Option("鳳山市","1001201000");
        menu.options[i++] = new Option("林園鄉","1001202000");
        menu.options[i++] = new Option("大寮鄉","1001203000");
        menu.options[i++] = new Option("大樹鄉","1001204000");
        menu.options[i++] = new Option("大社鄉","1001205000");
        menu.options[i++] = new Option("仁武鄉","1001206000");
        menu.options[i++] = new Option("鳥松鄉","1001207000");
        menu.options[i++] = new Option("岡山鎮","1001208000");
        menu.options[i++] = new Option("橋頭鄉","1001209000");
        menu.options[i++] = new Option("燕巢鄉","1001210000");
        menu.options[i++] = new Option("田寮鄉","1001211000");
        menu.options[i++] = new Option("阿蓮鄉","1001212000");
        menu.options[i++] = new Option("路竹鄉","1001213000");
        menu.options[i++] = new Option("湖內鄉","1001214000");
        menu.options[i++] = new Option("茄萣鄉","1001215000");
        menu.options[i++] = new Option("永安鄉","1001216000");
        menu.options[i++] = new Option("彌陀鄉","1001217000");
        menu.options[i++] = new Option("梓官鄉","1001218000");
        menu.options[i++] = new Option("旗山鎮","1001219000");
        menu.options[i++] = new Option("美濃鎮","1001220000");
        menu.options[i++] = new Option("六龜鄉","1001221000");
        menu.options[i++] = new Option("甲仙鄉","1001222000");
        menu.options[i++] = new Option("杉林鄉","1001223000");
        menu.options[i++] = new Option("內門鄉","1001224000");
        menu.options[i++] = new Option("茂林鄉","1001225000");
        menu.options[i++] = new Option("桃源鄉","1001226000");
        menu.options[i++] = new Option("三民鄉","1001227000");
    }
    else if (city=="1001300000")
    {
        menu.options[i++] = new Option("屏東市","1001301000");
        menu.options[i++] = new Option("潮州鎮","1001302000");
        menu.options[i++] = new Option("東港鎮","1001303000");
        menu.options[i++] = new Option("恆春鎮","1001304000");
        menu.options[i++] = new Option("萬丹鄉","1001305000");
        menu.options[i++] = new Option("長治鄉","1001306000");
        menu.options[i++] = new Option("麟洛鄉","1001307000");
        menu.options[i++] = new Option("九如鄉","1001308000");
        menu.options[i++] = new Option("里港鄉","1001309000");
        menu.options[i++] = new Option("鹽埔鄉","1001310000");
        menu.options[i++] = new Option("高樹鄉","1001311000");
        menu.options[i++] = new Option("萬巒鄉","1001312000");
        menu.options[i++] = new Option("內埔鄉","1001313000");
        menu.options[i++] = new Option("竹田鄉","1001314000");
        menu.options[i++] = new Option("新埤鄉","1001315000");
        menu.options[i++] = new Option("枋寮鄉","1001316000");
        menu.options[i++] = new Option("新園鄉","1001317000");
        menu.options[i++] = new Option("崁頂鄉","1001318000");
        menu.options[i++] = new Option("林邊鄉","1001319000");
        menu.options[i++] = new Option("南州鄉","1001320000");
        menu.options[i++] = new Option("佳冬鄉","1001321000");
        menu.options[i++] = new Option("琉球鄉","1001322000");
        menu.options[i++] = new Option("車城鄉","1001323000");
        menu.options[i++] = new Option("滿州鄉","1001324000");
        menu.options[i++] = new Option("枋山鄉","1001325000");
        menu.options[i++] = new Option("三地門","1001326000");
        menu.options[i++] = new Option("霧臺鄉","1001327000");
        menu.options[i++] = new Option("瑪家鄉","1001328000");
        menu.options[i++] = new Option("泰武鄉","1001329000");
        menu.options[i++] = new Option("來義鄉","1001330000");
        menu.options[i++] = new Option("春日鄉","1001331000");
        menu.options[i++] = new Option("獅子鄉","1001332000");
        menu.options[i++] = new Option("牡丹鄉","1001333000");
    }
    else if (city=="1001400000")
    {
        menu.options[i++] = new Option("臺東市","1001401000");
        menu.options[i++] = new Option("成功鎮","1001402000");
        menu.options[i++] = new Option("關山鎮","1001403000");
        menu.options[i++] = new Option("卑南鄉","1001404000");
        menu.options[i++] = new Option("鹿野鄉","1001405000");
        menu.options[i++] = new Option("池上鄉","1001406000");
        menu.options[i++] = new Option("東河鄉","1001407000");
        menu.options[i++] = new Option("長濱鄉","1001408000");
        menu.options[i++] = new Option("太麻里鄉","1001409000");
        menu.options[i++] = new Option("大武鄉","1001410000");
        menu.options[i++] = new Option("綠島鄉","1001411000");
        menu.options[i++] = new Option("海端鄉","1001412000");
        menu.options[i++] = new Option("延平鄉","1001413000");
        menu.options[i++] = new Option("金峰鄉","1001414000");
        menu.options[i++] = new Option("達仁鄉","1001415000");
        menu.options[i++] = new Option("蘭嶼鄉","1001416000");
    }
    else if (city=="1001500000")
    {
        menu.options[i++] = new Option("花蓮市","1001501000");
        menu.options[i++] = new Option("鳳林鎮","1001502000");
        menu.options[i++] = new Option("玉里鎮","1001503000");
        menu.options[i++] = new Option("新城鄉","1001504000");
        menu.options[i++] = new Option("吉安鄉","1001505000");
        menu.options[i++] = new Option("壽豐鄉","1001506000");
        menu.options[i++] = new Option("光復鄉","1001507000");
        menu.options[i++] = new Option("豐濱鄉","1001508000");
        menu.options[i++] = new Option("瑞穗鄉","1001509000");
        menu.options[i++] = new Option("富里鄉","1001510000");
        menu.options[i++] = new Option("秀林鄉","1001511000");
        menu.options[i++] = new Option("萬榮鄉","1001512000");
        menu.options[i++] = new Option("卓溪鄉","1001513000");
    }
    else if (city=="1001600000")
    {
        menu.options[i++] = new Option("馬公市","1001601000");
        menu.options[i++] = new Option("湖西鄉","1001602000");
        menu.options[i++] = new Option("白沙鄉","1001603000");
        menu.options[i++] = new Option("西嶼鄉","1001604000");
        menu.options[i++] = new Option("望安鄉","1001605000");
        menu.options[i++] = new Option("七美鄉","1001606000");
    }
    else if (city=="1001700000")
    {
        menu.options[i++] = new Option("中正區","1001701000");
        menu.options[i++] = new Option("七堵區","1001702000");
        menu.options[i++] = new Option("暖暖區","1001703000");
        menu.options[i++] = new Option("仁愛區","1001704000");
        menu.options[i++] = new Option("中山區","1001705000");
        menu.options[i++] = new Option("安樂區","1001706000");
        menu.options[i++] = new Option("信義區","1001707000");
    }
    else if (city=="1001800000")
    {
        menu.options[i++] = new Option("東區","1001801000");
        menu.options[i++] = new Option("北區","1001802000");
        menu.options[i++] = new Option("香山區","1001803000");
    }
    else if (city=="1001900000")
    {
        menu.options[i++] = new Option("中區","1001901000");
        menu.options[i++] = new Option("東區","1001902000");
        menu.options[i++] = new Option("南區","1001903000");
        menu.options[i++] = new Option("西區","1001904000");
        menu.options[i++] = new Option("北區","1001905000");
        menu.options[i++] = new Option("西屯區","1001906000");
        menu.options[i++] = new Option("南屯區","1001907000");
        menu.options[i++] = new Option("北屯區","1001908000");
    }
    else if (city=="1002000000")
    {
        menu.options[i++] = new Option("東區","1002001000");
        menu.options[i++] = new Option("西區","1002002000");
    }
    else if (city=="1002100000")
    {
        menu.options[i++] = new Option("東區","1002101000");
        menu.options[i++] = new Option("南區","1002102000");
        //menu.options[i++] = new Option("西區","1002103000");
        menu.options[i++] = new Option("北區","1002104000");
        menu.options[i++] = new Option("中西區","1002105000");
        menu.options[i++] = new Option("安南區","1002106000");
        menu.options[i++] = new Option("安平區","1002107000");
    }
    else if (city=="0900700000")
    {
        menu.options[i++] = new Option("南竿鄉","0900701000");
        menu.options[i++] = new Option("北竿鄉","0900702000");
        menu.options[i++] = new Option("莒光鄉","0900703000");
        menu.options[i++] = new Option("東引鄉","0900704000");
    }
    else if (city=="0902000000")
    {
        menu.options[i++] = new Option("金城鎮","0902001000");
        menu.options[i++] = new Option("金沙鎮","0902002000");
        menu.options[i++] = new Option("金湖鎮","0902003000");
        menu.options[i++] = new Option("金寧鄉","0902004000");
        menu.options[i++] = new Option("烈嶼鄉","0902005000");
        menu.options[i++] = new Option("烏坵鄉","0902006000");
    }
}
