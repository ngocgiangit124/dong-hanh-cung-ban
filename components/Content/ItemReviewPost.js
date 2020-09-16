import React, { memo } from 'react'

const ReviewIteamPost = memo(() => {
    return (
        <>
            <div className="mt-6 pt-4 pb-4  bg-white rounded-lg">
                <div className=" pl-6 pr-6">
                    <div className="mt-1">
                        <h3 className="text-xl font-medium">Resort ở Hội An vào top khu nghỉ dưỡng hàng đầu Đông Nam Á </h3>
                    </div>
                    <div className={`mt-6 w-full flex items-center justify-between`}>
                        <div className="flex items-center">
                            <div className="flex items-center mr-5">
                                <div className="mr-5" ><img className="rounded" src="../img/avatar.png" alt="logo" /></div>
                                <div className="font-semibold">Hoàng Văn Thái</div>

                            </div>
                            <div className="text-gray-500 text-sm">
                                <span>20h15 - 23/07/2020</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center  text-xs  '>
                                <img src='../img/icon_commentsm.png' className="mr-2" /><span className="mr-10">141</span>
                                <img src='../img/icon_chiasesm.png' className="mr-2" /><span>12121</span>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="mt-6 w-full">
                    <img className="w-full" src="../img/img_item_post.png" alt="" />
                </div>
                <div className=" pl-6 pr-6">
                    <div className="mt-6">
                        <p>Trưởng ban Thi đua khen thưởng Trung ương cho hay, đối với một cán bộ phải tạm đình chỉ công tác để điều tra liên quan đến một số vụ án phức tạp thì việc xét duyệt tặng thưởng Huân chương sẽ không được xem xét.</p>

                        <p>Theo thông tin từ báo Đại Đoàn Kết,
                        trả lời thông tin liên quan đến việc xét tặng Huân chương Lao động hạng Nhất cho
                        nguyên Chủ tịch UBND TP Hà Nội Nguyễn Đức Chung, đại diện Ban Thi đua khen thưởng Trung ương
                        cho biết, việc đề xuất cá nhân này được nhận Huân chương lao động hạng nhất vì những thành
                        tích trong phòng chống dịch covid-19 mới chỉ dừng ở đầu Hà Nội, hiện Ban Thi đua khen thưởng
                            Trung ương vẫn chỉ đọc trên báo chí, Hà Nội chưa đề xuất việc này đến Ban Thi đua Khen thưởng Trung ương.</p>

                        <p>Trả lời liệu việc trao Huân chương Lao động hạng Nhất cho các nhân ông
                        Nguyễn Đức Chung có đúng quy trình, quy định hay không? Bà Trần Thị Hà, nguyên Thứ
                        trưởng Bộ Nội vụ, Trưởng ban Thi đua khen thưởng Trung ương cho hay, đối với một cán bộ
                        phải tạm đình chỉ công tác để điều tra liên quan đến một số vụ án phức tạp thì việc xét duyệt
                               tặng thưởng Huân chương sẽ không được xem xét.</p>

                        <p>Trước đó vào hồi cuối tháng 6/2020 Hội đồng Thi đua - khen thưởng TP Hà Nội đã thực hiện các bước
                        theo quy trình đề xuất xét tặng Huân chương Lao động hạng Nhất với Chủ tịch UBND TP Nguyễn Đức Chung và tập thể
                            nhân dân, cán bộ TP có thành tích chống dịch Covid-19.</p>

                        <p>Trước đó, Bộ Chính trị đã quyết định đình chỉ sinh hoạt Ban Chấp hành Đảng bộ,
                        Ban Thường vụ Thành ủy Hà Nội và đình chỉ chức vụ Phó Bí thư Thành ủy Hà Nội đối với ông
                            Nguyễn Đức Chung, Ủy viên Trung ương Đảng, Phó Bí thư Thành ủy, Chủ tịch UBND TP.Hà Nội.</p>

                        <p>Quyết định đình chỉ là để xác minh,
                        điều tra làm rõ trách nhiệm có liên quan của ông Nguyễn Đức Chung
                        trong một số vụ án theo quy định của pháp luật  Cùng ngày, Thủ tướng Chính phủ Nguyễn Xuân Phúc
                            đã ký quyết định số 1223/QĐ-TTg tạm đình chỉ công tác đối với ông Nguyễn Đức Chung, Chủ tịch UBND TP.Hà Nội.</p>

                        <p>Quyết định nêu rõ, tạm đình chỉ công tác đối với ông Nguyễn Đức Chung,
                        Chủ tịch UBND TP.Hà Nội để xác minh, điều tra làm rõ trách nhiệm
                        có liên quan của ông Chung trong một số vụ án theo quy định của pháp luật.
                        Thời hạn tạm đình chỉ công tác là 90 ngày, kể từ ngày ra quyết định tạm đình
                            chỉ công tác.</p>
                    </div>
                    <div className="mt-12">
                        <h3 className="text-lg font-semibold">Từ khoá</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap font-semibold text-blue-700 text-xs">
                        <a href="" className="py-2 px-5 leading-4 rounded-full bg-blue-200 max-w-13rem text-center mr-2">vong quanh the gioi...</a>
                        <a href="" className="py-2 px-5 leading-4 rounded-full bg-blue-200 max-w-13rem text-center mr-2">travel</a>
                        <a href="" className="py-2 px-5 leading-4 rounded-full bg-blue-200 max-w-13rem text-center mr-2">travel</a>
                    </div>

                    <div className="border-t-2 mt-12 pt-2 pb-2 flex items-center justify-between ">
                        <div className="w-1/2 border-gray-900 sm:w-full pr-3">
                            <a href="" className="rounded-full text-lg items-center flex justify-center w-full p-3 font-semibold">
                                <img className="mr-4" src="../img/icon_comment.png" />
                                <span>Bình luận</span>
                            </a>
                        </div>
                        <div className="w-1/2 border-gray-900 sm:w-full pl-3">
                            <a href="" className="rounded-full text-lg items-center flex justify-center w-full p-3 font-semibold">
                                <img className="mr-4" src="../img/icon_chiase.png" />
                                <span>Chia sẻ</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
});
export default ReviewIteamPost;