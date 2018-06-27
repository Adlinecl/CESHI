$(window).scroll(function(){
	var textHeight = $(".logo").height();
	var bodyHeight = $("body").height();        
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();	
	if((scrollHeight + windowHeight) <= (windowHeight + textHeight )) {                         
          $(".logo").addClass("haha");
        }else {        
	      $(".logo").removeClass("haha"); 
	}
	var header =$(".header").height();
	var make =$(".time-text").height();
	var liHeight = $(".blog-box").height();
    if((scrollHeight + windowHeight) >= (header + liHeight)) {
           $(".time-text").addClass("agatime");
	}else {
		$(".time-text").removeClass("agatime");
	}
	var haha =$(".little-text .flag")
	console.log(haha)
	
    $(".text-text").mouseover(function(){
		$(this).children(".comment-btn").css("opacity","1");
        $(this).parent().css("background","#fef6f6");
	})
	$(".text-text").mouseleave(function(){
		$(this).children(".comment-btn").css("opacity","0");
        $(this).parent().css("background","#fff");
	})
	$(".click-right").click(function(){
		$(".fun-little").animate({"marginLeft":"-120px"})
	})
	$(".click-left").click(function(){
		$(".fun-little").animate({"marginLeft":"0"})
	})
	// $(".prop").mouseover(function(){
	// 	$(".box-lun").show();
	// })
	// $(".prop").mouseleave(function(){
	// 	$(".box-lun").hide();
	// })
})
$(function(){
	var res = {
		result: [
	        {
				"status" : true,
			    "type": "SIMILAR_PRO",
				"data": [
				     {
						"id": "1",
					    "name": "哈哈莹",
					    "email": "1977905246@qq.com",
					    "image": "./image/facjpg.jpg",
					    "status": "0",
					    "city": "天津市网友",
					    "time": "今日 16：45",
					    "talk": "你的后台是自己写的吗，文章和内容摘要示例图片能对应起来，这个是怎么实现的，我是自己用nodejs写的后台，目前无法实现，数据渲染出来，整张页面上只有一张图片，很难看。",
					    "createtime": "2017-10-22 16:14:13",
					},
					{
						"id": "1",
					    "name": "xixi莹",
					    "email": "1977905246@qq.com",
					    "image": "./image/facjpg.jpg",
					    "status": "0",
					    "city": "北京市网友",
					    "time": "今日 16：45",
					    "talk": "又来了 ，今天在www.dede.mao这个网站看到再出售你现在这个模板。才卖198元、真是的……",
					    "createtime": "2017-10-22 16:14:13",
					    "answer": [
					    {
	                        "city": "北京市网友",
						    "time": "今日 16：45",
						    "talk": "又来了 ，今天在www.dede.mao这个网站看到再出售你现在这个模板。才卖198元、真是的……",
					    },
					     {
	                        "city": "上海市网友",
						    "time": "今日 8：45",
						    "talk": "请问，这个行业对SEO也应该有要求吧？这方面怎么学呢",
					    },
					    ]
					},
					{
						"id": "1",
					    "name": "马天涯",
					    "email": "1977905246@qq.com",
					    "image": "./image/facjpg.jpg",
					    "status": "0",
					    "city": "河北市网友",
					    "time": "今日 11：45",
					    "talk": "真不错！但我觉得做博客平台（像新浪博客）是不是更有意义！更有发展潜力！我不懂IT，不知道有多大难度。",
					    "createtime": "2017-10-22 16:14:13",
					},
					{
						"id": "1",
					    "name": "xixi莹",
					    "email": "1977905246@qq.com",
					    "image": "./image/facjpg.jpg",
					    "status": "0",
					    "city": "北京市网友",
					    "time": "今日 16：45",
					    "talk": "又来了 ，今天在www.dede.mao这个网站看到再出售你现在这个模板。才卖198元、真是的……",
					    "createtime": "2017-10-22 16:14:13",

					}
				]		
	        },
            {
			"status" : true,
		    "type": "SIMILAR_PRA",
			"data": [
			    
				{
					"id": "1",
				    "name": "xixi莹",
				    "email": "1977905246@qq.com",
				    "image": "./image/facjpg.jpg",
				    "status": "0",
				    "city": "北京市网友",
				    "time": "今日 16：45",
				    "talk": "又来了",
				    "createtime": "2017-10-22 16:14:13",
				    "answer": [
				    {
				    	"name": "傻子",
                        "city": "北京市网友",
					    "time": "今日 16：45",
					    "talk": "又来了 ，今天在www.dede.mao这个网站看到再出售你现在这个模板。才卖198元、真是的……",
				    }
				    ],
				    "answerAbout": [
				    {
				    	"name": "d狄文阁傻子",
                        "city": "上海市网友",
					    "time": "今日 5：45",
					    "talk": "基本上每天都来这瞧一瞧，弄网站的时候参考了不少构造细节，一开始还自己写php后台，来这才发现有cms这东西的存在，然后就省了不少事了。最后参考多个网站，终于弄好了自己的博客了。欢迎大家来串串门：www.canvvv.com",
				    }
				    ]
				}
			]		
            }
		]
	}
	console.log(res.result.length)
	for(var i=0; i<res.result.length; i++){
       if(res.result[i].type == 'SIMILAR_PRO'){
       	var str = '';
        for(var j=0; j<res.result[i].data.length; j++){
           str += '<div class="comment-text"><a href="javascript:void(0)"><img src="./image/facjpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+res.result[i].data[j].name+'</a></span><span class="comment-city"> '+res.result[i].data[j].city+'</span><span class="comment-time"> '+res.result[i].data[j].time+'</span></div><div class="comment-about"><p>'+res.result[i].data[j].talk+'</p></div><div class="comment-btn"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复 </a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>1</a></span><span class="prop"><a href="javascript:void(0)"><i></i></a></span></div></div></div>'
           $(".make-get").html(str)
        }
       }
       if(res.result[i].type == 'SIMILAR_PRA'){
       	var qqstr = '';
        for(var j=0; j<res.result[i].data.length; j++){
        	console.log(res.result[i].data[j].answer.length);
        	for(var k=0; k<res.result[i].data[j].answer.length; k++){
        		for(var M=0; M<res.result[i].data[j].answerAbout.length; M++){
        			qqstr = '<div class="comment-text"><a href="javascript:void(0)"><img src="./image/qxaQowS_jpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+res.result[i].data[j].name+'</a></span><span class="comment-city">'+res.result[i].data[j].city+'</span><span class="comment-time"> 今日10:43</span></div><div class="comment-about"><div class="big-text"><div class="little-text"><div class="text-text"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+res.result[i].data[j].answer[k].name+'</a></span><span class="comment-city">'+res.result[i].data[j].answer[k].city+'</span><span class="comment-time"> 1</span></div><div class="comment-about"><p>'+res.result[i].data[j].answer[k].talk+'</p></div><div class="comment-btn hide"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>1</a></span></div></div></div><div class="text-text"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">'+res.result[i].data[j].answerAbout[k].name+'</a></span><span class="comment-city">'+res.result[i].data[j].answerAbout[M].city+'</span><span class="comment-time"> 2</span></div><div class="comment-about"><p>'+res.result[i].data[j].answerAbout[M].talk+'</p></div><div class="comment-btn hide"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>2</a></span></div></div></div><p>'+res.result[i].data[j].talk+'</p></div><div class="comment-btn "><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>1</a></span><span class="prop"><a href="javascript:void(0)"><i></i></a></span></div></div></div>'
                    $(".make-move").html(qqstr);
        		}
            }
        }   
       }
	}
})