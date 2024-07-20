function page_ctrl(data_obj) {
    var obj_box = (data_obj.obj_box !== undefined) ? data_obj.obj_box : function () {
        return;
    };
    var total_item = (data_obj.total_item !== undefined) ? parseInt(data_obj.total_item) : 0;
    var per_num = (data_obj.per_num !== undefined) ? parseInt(data_obj.per_num) : 10;
    var current_page = (data_obj.current_page !== undefined) ? parseInt(data_obj.current_page) : 1;
    var total_page = total_item;// Math.ceil(total_item / per_num);
    if (total_page < 2) {
        return;
    }
    //$(obj_box).append('<div class="page_content"></div>');
    $(obj_box).append('<div class="page_ctrl"></div>');
    function page_even() {
        function change_content() {
            var page_content = '<ul style="width: 300px;margin: 10px auto;">';
            for (var i = 0; i < per_num; i++) {
                page_content += '<li>' + ((current_page - 1) * per_num + i + 1) + ',分页条目</li>';
            }
            page_content += '</ul>';
            $(obj_box).children('.page_content').html(page_content);
        }
        //change_content();
        //var inp_val = (current_page == total_page) ? 1 : current_page + 0;//改为1点确定循环跳转下页
        var inp_val = current_page;
        var append_html = '<a class="prev_page"><i>&lt;</i>上页</a>';
        for (var i = 0; i < total_page - 1; i++) {
            if (total_page > 8 && current_page > 6 && i < current_page - 3) {
                if (i < 2) {
                    append_html += '<a class="page_num">' + (i + 1) + '</a>';
                } else if (i == 2) {
                    append_html += '<span class="page_dot">...</span>';
                }
            } else if (total_page > 8 && current_page < total_page - 3 && i > current_page + 1) {
                if (current_page > 6 && i == current_page + 2) {
                    append_html += '<span class="page_dot">...</span>';
                } else if (current_page < 7) {
                    if (i < 8) {
                        append_html += '<a class="page_num">' + (i + 1) + '</a>';
                    } else if (i == 8) {
                        append_html += '<span class="page_dot">...</span>';
                    }
                }
            } else {
                if (i == current_page - 1) {
                    append_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
                } else {
                    append_html += '<a class="page_num">' + (i + 1) + '</a>';
                }
            }
        }
        if (current_page == total_page) {
            append_html += '<a class="page_num current_page">' + (i + 1) + '</a>';
        } else {
            append_html += '<a class="page_num">' + (i + 1) + '</a>';
        }
        append_html += '<a class="next_page">下页<i>&gt;</i></a><span class="page_total">共 ' + total_page + ' 页, 到第</span><input class="input_page_num" type="text" value="' + inp_val + '"><span class="page_text">页</span><a class="to_page_num">确定</a>';
        $(obj_box).children('.page_ctrl').append(append_html);
        if (current_page == 1) {
            $(obj_box + ' .page_ctrl .prev_page').attr('disabled', 'disabled').addClass('btn_dis');
        } else {
            $(obj_box + ' .page_ctrl .prev_page').removeAttr('disabled').removeClass('btn_dis');
        }
        if (current_page == total_page) {
            $(obj_box + ' .page_ctrl .next_page').attr('disabled', 'disabled').addClass('btn_dis');
        } else {
            $(obj_box + ' .page_ctrl .next_page').removeAttr('disabled').removeClass('btn_dis');
        }
    }
    page_even();
    $(obj_box + ' .page_ctrl').on('click', 'a',
        function () {
            var that = $(this);

            if (that.hasClass('prev_page')) {
                if (current_page != 1) {
                    current_page--;
                    that.parent('.page_ctrl').html('');
                    page_even();
                }
            } else if (that.hasClass('next_page')) {
                if (current_page != total_page) {
                    current_page++;
                    that.parent('.page_ctrl').html('');
                    page_even();
                }
            } else if (that.hasClass('page_num') && !that.hasClass('current_page')) {
   
                var page = parseInt(that.html());
                if (isNaN(page) || page < 1 || page > total_page) {
                    alert("请输入正确的页码！");
                    return;
                }
                current_page = page;

                that.parent('.page_ctrl').html('');
                page_even();
            } else if (that.hasClass('to_page_num')) {
                var page = parseInt(that.siblings('.input_page_num').val());
                if (isNaN(page) || page < 1 || page > total_page) {
                    alert("请输入正确的页码！");
                    return;
                }

                current_page = page
                    ;
                that.parent('.page_ctrl').html('');
                page_even();
            }

            to_page(current_page);
        });
}