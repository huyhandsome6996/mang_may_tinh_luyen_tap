/* ===========================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM v2
   158 câu, chia 5 chương theo file ôn tập mới
   - Chương 1: Khái niệm cơ bản (topology, phân loại mạng) — 31 câu
   - Chương 2: Môi trường & Thiết bị mạng — 25 câu
   - Chương 3: OSI/TCP-IP, giao thức (DHCP, DNS, TCP/UDP, ARP, CLI router) — 38 câu
   - Chương 4: IPv4 & Subnetting (đông nhất) — 49 câu
   - Chương 6: Cloud Computing (NIST, IaaS/PaaS/SaaS, Public/Private/Hybrid) — 15 câu
   =========================================== */

const QUIZ_QUESTIONS = [
  // ============ CHƯƠNG 1: KHÁI NIỆM CƠ BẢN (31 câu) ============
  {
    q: "Một doanh nghiệp có các máy tính sử dụng hệ điều hành khác nhau (Windows, Linux) nhưng vẫn có thể trao đổi dữ liệu với nhau. Nguyên nhân quan trọng nhất là:",
    options: ["Các máy tính có cùng hãng sản xuất", "Các máy tính tuân thủ các chuẩn giao thức mạng chung", "Các máy tính đều sử dụng WiFi", "Các máy tính có cùng cấu hình phần cứng"],
    answer: 1, chapter: 1,
    explain: "Các máy tính khác HĐH vẫn giao tiếp được vì đều tuân theo các giao thức mạng chuẩn (TCP/IP, HTTP, FTP). Giao thức quy định cách đóng gói, truyền và nhận dữ liệu."
  },
  {
    q: "Trong kiến trúc mạng, topology và giao thức có vai trò tương ứng là:",
    options: ["Quy định địa chỉ IP và định tuyến", "Quy định cách kết nối vật lý/logical và quy tắc trao đổi dữ liệu", "Quy định loại hệ điều hành và ứng dụng", "Quy định tốc độ xử lý và dung lượng lưu trữ"],
    answer: 1, chapter: 1,
    explain: "Topology: mô tả cách kết nối vật lý/logical (Star, Bus, Ring, Mesh). Protocol: quy tắc trao đổi dữ liệu (TCP/IP, HTTP, FTP)."
  },
  {
    q: "Một tổ chức mở rộng hệ thống mạng từ 20 lên 500 máy tính. Nếu không áp dụng mô hình phân tầng, khó khăn lớn nhất là:",
    options: ["Không thể sử dụng địa chỉ IP", "Không thể kết nối Internet", "Khó thiết kế, bảo trì và xác định vị trí xảy ra lỗi", "Không thể triển khai Switch"],
    answer: 2, chapter: 1,
    explain: "Khi mạng lớn, không phân tầng sẽ rất khó thiết kế, bảo trì, xác định vị trí lỗi, nâng cấp."
  },
  {
    q: "Ý nghĩa quan trọng nhất của mô hình phân tầng trong truyền thông mạng là:",
    options: ["Tăng tốc độ CPU", "Chuẩn hóa chức năng và giảm độ phức tạp của hệ thống", "Loại bỏ hoàn toàn lỗi truyền dữ liệu", "Thay thế các giao thức mạng"],
    answer: 1, chapter: 1,
    explain: "Phân tầng (OSI, TCP/IP) chia quá trình truyền thông thành các tầng, mỗi tầng 1 chức năng. Giúp chuẩn hóa, giảm phức tạp, dễ bảo trì."
  },
  {
    q: "Mạng máy tính là gì?",
    options: ["Tập hợp các máy tính độc lập", "Tập hợp các máy tính kết nối qua môi trường truyền dẫn để chia sẻ tài nguyên", "Hệ thống phần mềm dùng chung", "Một siêu máy tính kết nối nhiều màn hình"],
    answer: 1, chapter: 1,
    explain: "Mạng máy tính là tập hợp các máy tính và thiết bị kết nối qua môi trường truyền dẫn nhằm trao đổi thông tin và chia sẻ tài nguyên."
  },
  {
    q: "Phân loại mạng theo khoảng cách địa lý gồm những loại chính nào?",
    options: ["LAN, MAN, WAN", "Client, Server, Peer", "Ring, Star, Bus", "TCP, UDP, IP"],
    answer: 0, chapter: 1,
    explain: "Theo khoảng cách: PAN (cá nhân), LAN (cục bộ), MAN (đô thị), WAN (diện rộng), GAN (toàn cầu)."
  },
  {
    q: "Mạng LAN phù hợp nhất để triển khai trong phạm vi nào?",
    options: ["Một quốc gia", "Một lục địa", "Một văn phòng hoặc tòa nhà", "Toàn cầu"],
    answer: 2, chapter: 1,
    explain: "LAN (Local Area Network) kết nối máy tính trong vòng bán kính hẹp vài trăm mét — văn phòng, tòa nhà, trường học."
  },
  {
    q: "Trong mô hình mạng Peer-to-Peer (Workgroup), các máy tính có vai trò như thế nào?",
    options: ["Máy chủ điều khiển máy khách", "Hoàn toàn bình đẳng, vừa là client vừa là server", "Chỉ nhận dữ liệu, không chia sẻ", "Bắt buộc phải có Domain Controller"],
    answer: 1, chapter: 1,
    explain: "Workgroup: các máy bình đẳng, mỗi máy vừa là client vừa là server, không có máy chủ chuyên dụng."
  },
  {
    q: "Nhược điểm lớn nhất của mô hình Workgroup là gì?",
    options: ["Chi phí đầu tư phần cứng cao", "Cài đặt phức tạp", "Bảo mật kém, khó quản lý tập trung khi mạng lớn", "Phải dùng hệ điều hành Windows Server"],
    answer: 2, chapter: 1,
    explain: "Workgroup không có quản lý tập trung, bảo mật kém, chỉ phù hợp mạng <15 máy."
  },
  {
    q: "Trong môi trường Windows Workgroup, cơ sở dữ liệu tài khoản người dùng được lưu tại đâu?",
    options: ["Tập tin NTDS.DIT", "Tập tin SAM trên từng máy cục bộ", "Máy chủ DNS", "Active Directory"],
    answer: 1, chapter: 1,
    explain: "Workgroup dùng file SAM (Security Accounts Manager) cục bộ trên từng máy để chứng thực."
  },
  {
    q: "Mô hình Client-Server (Domain) có ưu điểm gì vượt trội so với Peer-to-Peer?",
    options: ["Không cần máy chủ", "Chi phí cực thấp", "Quản lý bảo mật tập trung, toàn vẹn dữ liệu cao", "Dễ bị virus tấn công hơn"],
    answer: 2, chapter: 1,
    explain: "Domain có Domain Controller + Active Directory quản lý tập trung, bảo mật cao, toàn vẹn dữ liệu."
  },
  {
    q: "Thiết bị nào bắt buộc phải có để tạo thành một Domain trong mạng Microsoft?",
    options: ["Hub", "Switch", "Domain Controller", "Modem"],
    answer: 2, chapter: 1,
    explain: "Domain Controller (DC) là máy chủ điều khiển vùng, chứng thực người dùng và quản lý tài nguyên."
  },
  {
    q: "Dịch vụ cốt lõi dùng để quản lý người dùng và tài nguyên tập trung trong mạng Domain là gì?",
    options: ["FTP", "Active Directory", "HTTP", "DHCP"],
    answer: 1, chapter: 1,
    explain: "Active Directory (AD) là dịch vụ thư mục lưu trữ thông tin tài nguyên và tài khoản, quản lý tập trung."
  },
  {
    q: "Cấu trúc mạng (Topology) dạng Star (Hình sao) sử dụng thiết bị trung tâm nào?",
    options: ["Terminator", "Dây cáp trục chính (Backbone)", "Hub hoặc Switch", "Router"],
    answer: 2, chapter: 1,
    explain: "Star topology dùng Hub/Switch làm trung tâm, các máy nối vào theo hình sao."
  },
  {
    q: "Cấu trúc mạng nào dễ bị sụp đổ toàn hệ thống nhất nếu thiết bị trung tâm bị hỏng?",
    options: ["Bus Topology", "Ring Topology", "Star Topology", "Mesh Topology"],
    answer: 2, chapter: 1,
    explain: "Star topology phụ thuộc hoàn toàn vào Hub/Switch trung tâm. Nếu trung tâm hỏng → toàn mạng sập."
  },
  {
    q: "Trong mô hình Star Topology, nếu Switch trung tâm bị hỏng thì điều gì xảy ra?",
    options: ["Chỉ một máy tính bị ảnh hưởng", "Một số máy vẫn hoạt động bình thường", "Toàn bộ hệ thống mạng ngừng liên lạc", "Router tự động thay thế Switch"],
    answer: 2, chapter: 1,
    explain: "Switch là điểm lỗi đơn (Single Point of Failure) của mô hình Star. Hỏng Switch → toàn mạng gián đoạn."
  },
  {
    q: "Đơn vị đo lường tốc độ truyền dữ liệu cơ bản trong mạng là gì?",
    options: ["Byte/s (Bps)", "Bit trên giây (bps)", "Hertz (Hz)", "Mhz"],
    answer: 1, chapter: 1,
    explain: "Tốc độ mạng đo bằng bit trên giây (bps) — lưu ý: 1 Byte = 8 bit."
  },
  {
    q: "Intranet là gì?",
    options: ["Mạng nội bộ của một tổ chức sử dụng công nghệ Internet", "Mạng kết nối toàn cầu", "Mạng dùng riêng cho các ngân hàng", "Mạng vệ tinh"],
    answer: 0, chapter: 1,
    explain: "Intranet là mạng nội bộ tổ chức dùng công nghệ Internet (TCP/IP, Web) nhưng không public ra ngoài."
  },
  {
    q: "Topology nào đắt tiền nhất nhưng an toàn nhất?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 3, chapter: 1,
    explain: "Mesh: mỗi máy nối với tất cả máy còn lại → nhiều đường dự phòng → an toàn nhưng đắt (n(n-1)/2 dây)."
  },
  {
    q: "Mạng nào kết nối trong phạm vi một thành phố?",
    options: ["LAN", "MAN", "WAN", "PAN"],
    answer: 1, chapter: 1,
    explain: "MAN (Metropolitan Area Network) kết nối các LAN trong phạm vi một thành phố (<100km)."
  },
  {
    q: "Topology Bus có ưu điểm gì?",
    options: ["An toàn nhất", "Ít cáp, dễ lắp đặt, giá rẻ", "Tốc độ cao nhất", "Dễ cô lập lỗi"],
    answer: 1, chapter: 1,
    explain: "Bus topology dùng 1 đường trục chính → ít cáp, dễ lắp, rẻ. Nhưng hỏng 1 đoạn → toàn mạng sập."
  },
  {
    q: "Ký hiệu 'NIC' trong mạng máy tính có nghĩa là gì?",
    options: ["Network Internal Card", "Network Interface Card (Card mạng)", "Node Internet Connection", "Network Interconnect Cable"],
    answer: 1, chapter: 1,
    explain: "NIC = Network Interface Card, card giao tiếp mạng, có địa chỉ MAC duy nhất."
  },
  {
    q: "Một tổ chức mở rộng hệ thống mạng từ nhiều chi nhánh, muốn chuẩn hóa kiến trúc. Lợi ích lớn nhất là gì?",
    options: ["Tăng số lượng IP", "Các thiết bị từ nhiều nhà cung cấp tương thích, dễ quản lý", "Tăng tốc độ mạng", "Không cần dùng Router"],
    answer: 1, chapter: 1,
    explain: "Chuẩn hóa kiến trúc (OSI, TCP/IP, IEEE) giúp thiết bị các hãng khác nhau giao tiếp được, dễ quản lý, bảo trì."
  },
  {
    q: "Trong hệ thống mạng dùng thiết bị từ nhiều nhà cung cấp (Cisco, HP, MikroTik), nếu KHÔNG có chuẩn hóa kiến trúc, điều gì xảy ra?",
    options: ["Vẫn giao tiếp bình thường vì cùng IP", "Tăng hiệu năng do giảm giao thức trung gian", "Có thể không tương thích, gián đoạn truyền thông", "Giảm nhu cầu định tuyến"],
    answer: 2, chapter: 1,
    explain: "Không chuẩn hóa → thiết bị khác cách triển khai giao thức → không hiểu nhau → lỗi truyền dữ liệu."
  },
  {
    q: "Mô hình mạng nào lưu cơ sở dữ liệu tài khoản trong file NTDS.DIT?",
    options: ["Workgroup", "Peer-to-Peer", "Domain", "Standalone"],
    answer: 2, chapter: 1,
    explain: "Domain lưu DB tài khoản trong file NTDS.DIT trên Domain Controller (Active Directory)."
  },
  {
    q: "Mô hình Workgroup phù hợp với mạng có quy mô nào?",
    options: ["Dưới 15 máy", "Từ 50-100 máy", "Trên 500 máy", "Bất kỳ quy mô nào"],
    answer: 0, chapter: 1,
    explain: "Workgroup không có quản lý tập trung → chỉ phù hợp mạng nhỏ <15 máy."
  },
  {
    q: "Topology nào dùng 1 đường trục chính, 2 đầu có terminator?",
    options: ["Star", "Ring", "Bus", "Mesh"],
    answer: 2, chapter: 1,
    explain: "Bus topology dùng 1 đường trục (bus), 2 đầu có terminator chống phản xạ tín hiệu."
  },
  {
    q: "Topology nào mỗi máy nối với tất cả các máy còn lại?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    answer: 3, chapter: 1,
    explain: "Mesh: mỗi máy nối với tất cả máy còn lại. Số đường dây = n(n-1)/2."
  },
  {
    q: "Trong mạng Client-Server, máy chủ (Server) có vai trò gì?",
    options: ["Chỉ nhận dữ liệu", "Cấu hình mạnh, chuyên cung cấp dịch vụ cho máy khách", "Không cần hệ điều hành", "Chỉ dùng để in ấn"],
    answer: 1, chapter: 1,
    explain: "Server có cấu hình mạnh, chuyên cung cấp dịch vụ (file, print, database, web) cho client."
  },
  {
    q: "Lợi ích lớn nhất của việc nối mạng máy tính là gì?",
    options: ["Tăng tốc CPU", "Chia sẻ tài nguyên (phần cứng, phần mềm, dữ liệu)", "Mã hóa dữ liệu", "Tăng dung lượng ổ cứng"],
    answer: 1, chapter: 1,
    explain: "Nối mạng cho phép chia sẻ máy in, ổ cứng, dữ liệu, phần mềm; tăng độ tin cậy; tiết kiệm chi phí."
  },
  {
    q: "Trong một hệ thống mạng sử dụng thiết bị từ nhiều nhà cung cấp (Cisco, HP, MikroTik...), điều gì có khả năng xảy ra nếu không có chuẩn hóa kiến trúc mạng?",
    options: ["Các thiết bị vẫn giao tiếp bình thường do cùng dùng địa chỉ IP", "Tăng hiệu năng do giảm lớp giao thức trung gian", "Các hệ thống có thể không tương thích, gây gián đoạn truyền thông", "Giảm nhu cầu sử dụng các giao thức định tuyến"],
    answer: 2, chapter: 1,
    explain: "Khi nhiều nhà cung cấp, không chuẩn hóa (OSI/TCP-IP, IEEE) → thiết bị có thể không hiểu nhau do khác cách triển khai giao thức → không tương thích, gián đoạn truyền thông."
  },

  // ============ CHƯƠNG 2: MÔI TRƯỜNG & THIẾT BỊ (25 câu) ============
  {
    q: "Thiết bị nào sau đây đóng vai trò chuyển tiếp tín hiệu/mở rộng quy mô mạng?",
    options: ["PC", "Switch", "Laptop", "Máy in"],
    answer: 1, chapter: 2,
    explain: "Switch là thiết bị mạng dùng để kết nối nhiều thiết bị trong LAN, chuyển tiếp dữ liệu dựa trên MAC, mở rộng quy mô mạng."
  },
  {
    q: "Loại cáp mạng nào không bị ảnh hưởng bởi nhiễu sóng điện từ (EMI)?",
    options: ["Cáp đồng trục", "Cáp UTP", "Cáp quang", "Cáp STP"],
    answer: 2, chapter: 2,
    explain: "Cáp quang truyền bằng ánh sáng trong lõi thủy tinh → hoàn toàn miễn nhiễm nhiễu điện từ."
  },
  {
    q: "So với cáp UTP, ưu điểm nổi bật nhất của cáp quang là:",
    options: ["Giá rẻ hơn", "Dễ bấm đầu nối hơn", "Khoảng cách truyền xa và chống nhiễu điện từ tốt", "Không cần thiết bị mạng"],
    answer: 2, chapter: 2,
    explain: "Cáp quang truyền xa, băng thông cao, không bị nhiễu điện từ, độ ổn định và bảo mật cao."
  },
  {
    q: "Chuẩn bấm cáp T568B bắt đầu bằng cặp màu nào?",
    options: ["Trắng Xanh lá - Xanh lá", "Trắng Cam - Cam", "Trắng Nâu - Nâu", "Trắng Xanh dương - Xanh dương"],
    answer: 1, chapter: 2,
    explain: "T568B: Trắng Cam - Cam - Trắng Xanh lá - Xanh dương - Trắng Xanh dương - Xanh lá - Trắng Nâu - Nâu."
  },
  {
    q: "Cáp UTP khác cáp STP ở điểm nào?",
    options: ["UTP dùng lõi quang, STP dùng lõi đồng", "UTP không có lớp bọc bạc chống nhiễu, STP thì có", "UTP có 4 cặp dây, STP có 8 cặp dây", "UTP dùng cho mạng WAN, STP dùng cho mạng LAN"],
    answer: 1, chapter: 2,
    explain: "UTP (Unshielded) không có vỏ bọc kim loại; STP (Shielded) có lớp bạc chống nhiễu điện từ."
  },
  {
    q: "Cáp thẳng (Straight-through) được sử dụng trong trường hợp kết nối nào?",
    options: ["PC nối với PC", "Switch nối với Switch", "PC nối với Switch", "Router nối với Router"],
    answer: 2, chapter: 2,
    explain: "Cáp thẳng (B-B hoặc A-A) nối 2 thiết bị KHÁC loại: PC-Switch, Switch-Router."
  },
  {
    q: "Địa chỉ MAC có độ dài bao nhiêu bit?",
    options: ["16 bit", "32 bit", "48 bit", "64 bit"],
    answer: 2, chapter: 2,
    explain: "Địa chỉ MAC dài 48 bit (6 octet), biểu diễn dạng hex (vd: E7:96:C9:F4:00:1A)."
  },
  {
    q: "Địa chỉ MAC được ghi sẵn ở đâu?",
    options: ["Trong CPU", "Trong RAM", "Trong Card mạng (NIC)", "Trong Ổ cứng"],
    answer: 2, chapter: 2,
    explain: "MAC được nhà sản xuất nạp sẵn vào NIC (card mạng) — không thay đổi."
  },
  {
    q: "Sự khác nhau giữa địa chỉ IP và địa chỉ MAC là gì?",
    options: ["IP vật lý, MAC logic", "IP thay đổi, MAC cố định", "IP nhanh hơn MAC", "MAC chỉ dùng cho WiFi"],
    answer: 1, chapter: 2,
    explain: "IP là địa chỉ logic, có thể thay đổi. MAC là địa chỉ vật lý gắn cố định trên NIC."
  },
  {
    q: "Thiết bị mạng nào hoạt động bằng cách nhận gói tin ở một cổng và đẩy ra tất cả các cổng còn lại (Broadcast)?",
    options: ["Switch", "Router", "Hub", "Firewall"],
    answer: 2, chapter: 2,
    explain: "Hub broadcast ra mọi cổng → miền đụng độ lớn. Hub thuộc tầng 1 OSI."
  },
  {
    q: "Phát biểu nào mô tả đúng nhất vai trò của Switch trong mạng LAN?",
    options: ["Kết nối các mạng khác nhau", "Chuyển tiếp dữ liệu dựa trên địa chỉ MAC", "Cấp phát địa chỉ IP", "Phân giải tên miền"],
    answer: 1, chapter: 2,
    explain: "Switch hoạt động ở tầng Data Link, học MAC, chuyển tiếp frame đến đúng cổng đích."
  },
  {
    q: "Switch thông minh hơn Hub ở điểm nào?",
    options: ["Gửi dữ liệu ra mọi cổng", "Chỉ hoạt động ở tầng Network", "Có khả năng đọc địa chỉ MAC và chuyển dữ liệu đến đúng cổng đích", "Chống được mọi loại virus"],
    answer: 2, chapter: 2,
    explain: "Switch đọc MAC đích, tra MAC Table, gửi chỉ ra cổng đích (unicast) — chia nhỏ collision domain."
  },
  {
    q: "Trong một mạng LAN có nhiều máy tính, việc thay Hub bằng Switch sẽ mang lại lợi ích chủ yếu nào?",
    options: ["Tăng số lượng địa chỉ IP", "Giảm xung đột dữ liệu và nâng cao hiệu suất truyền thông", "Thay thế Router", "Tăng kích thước ổ cứng"],
    answer: 1, chapter: 2,
    explain: "Switch gửi dữ liệu đúng cổng đích → giảm xung đột (collision), tăng hiệu suất."
  },
  {
    q: "Thiết bị nào có chức năng kết nối các mạng (Subnet/LAN) khác nhau và định tuyến đường đi cho gói tin?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: 2, chapter: 2,
    explain: "Router thuộc tầng 3, dùng IP và Routing Table để định tuyến giữa các mạng khác nhau."
  },
  {
    q: "Một doanh nghiệp có hai chi nhánh sử dụng hai mạng IP khác nhau. Thiết bị nào là bắt buộc để các máy tính ở hai mạng này liên lạc được với nhau?",
    options: ["NIC", "Hub", "Router", "Access Point"],
    answer: 2, chapter: 2,
    explain: "Router kết nối các mạng khác nhau, định tuyến gói tin giữa chúng. NIC chỉ kết nối máy vào mạng, Hub/Access Point chỉ dùng trong LAN."
  },
  {
    q: "Một máy tính không thể tham gia mạng dù dây mạng và Switch vẫn hoạt động bình thường. Thành phần phần cứng nào cần kiểm tra đầu tiên trên máy tính?",
    options: ["DNS", "NIC", "Router", "DHCP Server"],
    answer: 1, chapter: 2,
    explain: "NIC (Network Interface Card) là phần cứng giúp máy kết nối mạng. Nếu dây và Switch OK mà máy không vào mạng → kiểm tra NIC."
  },
  {
    q: "Miền đụng độ (Collision Domain) lớn nhất xảy ra khi dùng thiết bị nào làm trung tâm?",
    options: ["Switch", "Router", "Access Point", "Hub"],
    answer: 3, chapter: 2,
    explain: "Hub broadcast ra mọi cổng → tất cả cổng chung 1 collision domain lớn."
  },
  {
    q: "Để mở rộng khoảng cách truyền tín hiệu trên cáp đồng mà không làm suy hao, người ta dùng thiết bị gì?",
    options: ["Repeater (Bộ tiếp sóng)", "Gateway", "Firewall", "DNS Server"],
    answer: 0, chapter: 2,
    explain: "Repeater khuếch đại và định thời lại tín hiệu ở tầng 1 để truyền xa hơn 100m."
  },
  {
    q: "Thiết bị nào ngăn chặn hiệu quả các gói tin Broadcast (quảng bá) lan truyền sang mạng khác?",
    options: ["Hub", "Switch Layer 2", "Bridge", "Router"],
    answer: 3, chapter: 2,
    explain: "Router không forward broadcast → chia miền broadcast, cách ly các mạng."
  },
  {
    q: "Cáp mạng CAT5e có thể truyền tối đa với tốc độ bao nhiêu (lý thuyết)?",
    options: ["10 Mbps", "100 Mbps", "1000 Mbps (1 Gbps)", "10 Gbps"],
    answer: 2, chapter: 2,
    explain: "Cat 5e hỗ trợ 1 Gbps (1000 Mbps) — phổ biến nhất trong LAN hiện nay."
  },
  {
    q: "Cổng kết nối vật lý dùng cho cáp xoắn đôi trên Switch/PC được gọi là cổng gì?",
    options: ["RJ-11", "RJ-45", "USB", "COM"],
    answer: 1, chapter: 2,
    explain: "RJ-45 (Registered Jack 45) có 8 chân, dùng cho cáp xoắn đôi UTP/STP."
  },
  {
    q: "Trong cáp xoắn đôi, tại sao các sợi dây lại được xoắn vào nhau từng cặp?",
    options: ["Để tiết kiệm chiều dài dây", "Để tăng độ bền cơ học", "Để chống nhiễu điện từ chéo (Crosstalk)", "Để dễ phân biệt màu sắc"],
    answer: 2, chapter: 2,
    explain: "Xoắn cặp dây triệt tiêu nhiễu điện từ gây ra bởi môi trường và giữa các cặp với nhau."
  },
  {
    q: "Khi hai máy tính gửi tín hiệu cùng lúc trên một đoạn cáp dùng chung, hiện tượng gì sẽ xảy ra?",
    options: ["Đụng độ (Collision)", "Cộng hưởng tín hiệu", "Tăng gấp đôi tốc độ mạng", "Broadcast Storm"],
    answer: 0, chapter: 2,
    explain: "Collision xảy ra khi 2 máy gửi cùng lúc trên cùng collision domain → cả hai phải dừng và gửi lại."
  },
  {
    q: "Thiết bị Gateway dùng để làm gì?",
    options: ["Nối dài cáp mạng", "Chuyển đổi giao thức giữa hai mạng hoàn toàn khác biệt nhau", "Phân giải tên miền", "Cấp địa chỉ IP động"],
    answer: 1, chapter: 2,
    explain: "Gateway chuyển đổi giữa các giao thức khác nhau (vd: IP ↔ IPX, IP ↔ SNA)."
  },
  {
    q: "Repeater hoạt động ở tầng nào của mô hình OSI?",
    options: ["Tầng 1 (Physical)", "Tầng 2 (Data Link)", "Tầng 3 (Network)", "Tầng 4 (Transport)"],
    answer: 0, chapter: 2,
    explain: "Repeater chỉ khuếch đại tín hiệu vật lý → tầng 1 (Physical Layer)."
  },

  // ============ CHƯƠNG 3: OSI/TCP-IP & GIAO THỨC (38 câu) ============
  {
    q: "Khi một trình duyệt web gửi yêu cầu truy cập website, giao thức HTTP hoạt động ở tầng nào của mô hình TCP/IP?",
    options: ["Network Access", "Internet", "Transport", "Application"],
    answer: 3, chapter: 3,
    explain: "HTTP thuộc tầng Application. Khi truy cập web: HTTP (Application) → TCP (Transport) → IP (Internet) → Ethernet/Wi-Fi (Network Access)."
  },
  {
    q: "Một kỹ sư mạng phát hiện dữ liệu đến đúng máy đích nhưng bị lỗi nội dung do mất gói tin. Chức năng nào của TCP giúp giải quyết?",
    options: ["Định địa chỉ IP", "Phân giải tên miền", "Đánh số thứ tự và truyền lại gói tin bị mất", "Chuyển đổi tín hiệu điện"],
    answer: 2, chapter: 3,
    explain: "TCP có sequence number, ACK, phát hiện mất gói và retransmission (truyền lại)."
  },
  {
    q: "Trong quá trình truy cập website www.example.com, thành phần nào được sử dụng trước để xác định địa chỉ IP của máy chủ?",
    options: ["Router", "Switch", "DNS", "DHCP"],
    answer: 2, chapter: 3,
    explain: "DNS phân giải tên miền www.example.com → IP trước. Sau khi có IP, dữ liệu mới gửi qua Router."
  },
  {
    q: "Một người dùng báo không truy cập được website bằng tên miền nhưng vẫn truy cập được bằng địa chỉ IP. Thành phần nào có khả năng gặp sự cố nhất?",
    options: ["Switch", "Router", "DNS", "DHCP"],
    answer: 2, chapter: 3,
    explain: "Truy cập IP được nhưng tên miền không được → vấn đề ở DNS phân giải tên miền."
  },
  {
    q: "Mô hình tham chiếu OSI bao gồm mấy tầng?",
    options: ["4", "5", "6", "7"],
    answer: 3, chapter: 3,
    explain: "OSI có 7 tầng: Application, Presentation, Session, Transport, Network, Data Link, Physical."
  },
  {
    q: "Tầng thấp nhất của mô hình OSI (Tầng 1) là tầng nào?",
    options: ["Data Link", "Network", "Transport", "Physical"],
    answer: 3, chapter: 3,
    explain: "Tầng 1 = Physical, truyền bit nhị phân qua cáp/sóng."
  },
  {
    q: "Đơn vị dữ liệu (PDU) tại tầng Network (Tầng 3) của mô hình OSI gọi là gì?",
    options: ["Frame", "Packet (Gói tin)", "Segment", "Bit"],
    answer: 1, chapter: 3,
    explain: "Tầng 3 - Network: PDU là Packet. Tầng 4: Segment. Tầng 2: Frame. Tầng 1: Bit."
  },
  {
    q: "Giao thức IP (Internet Protocol) hoạt động ở tầng nào của OSI?",
    options: ["Tầng 2 (Data Link)", "Tầng 3 (Network)", "Tầng 4 (Transport)", "Tầng 7 (Application)"],
    answer: 1, chapter: 3,
    explain: "IP hoạt động ở tầng 3 (Network) — định tuyến gói tin, cấp địa chỉ logic."
  },
  {
    q: "Chức năng chính của tầng Transport (Giao vận) là gì?",
    options: ["Định tuyến đường đi", "Đảm bảo truyền tải dữ liệu đầu cuối (End-to-end)", "Mã hóa dữ liệu", "Cấp phát IP"],
    answer: 1, chapter: 3,
    explain: "Tầng 4 - Transport đảm bảo truyền tải End-to-End: cắt segment, đánh số, sửa lỗi."
  },
  {
    q: "Giao thức nào thiết lập 'Bắt tay 3 bước' để đảm bảo tính tin cậy cao khi truyền dữ liệu?",
    options: ["UDP", "ICMP", "TCP", "ARP"],
    answer: 2, chapter: 3,
    explain: "TCP dùng 3-way handshake (SYN → SYN-ACK → ACK) trước khi truyền dữ liệu."
  },
  {
    q: "Giao thức TCP khác UDP chính ở điểm nào?",
    options: ["TCP không tin cậy", "TCP có kiểm soát truyền dữ liệu", "UDP kiểm soát truyền dữ liệu", "Không có khác biệt"],
    answer: 1, chapter: 3,
    explain: "TCP có kiểm soát: đánh số thứ tự, ACK, retransmission, kiểm soát luồng. UDP không."
  },
  {
    q: "Giao thức UDP (User Datagram Protocol) có đặc điểm gì nổi bật?",
    options: ["Đảm bảo không mất gói tin", "Truyền tải rất chậm", "Truyền tải nhanh, không cần thiết lập kết nối, có thể mất gói", "Yêu cầu phải xác nhận khi nhận đủ gói tin"],
    answer: 2, chapter: 3,
    explain: "UDP không kết nối, không ACK, gửi ngay — nhanh nhưng có thể mất gói. Dùng cho streaming, game."
  },
  {
    q: "Một ứng dụng truyền file yêu cầu đảm bảo dữ liệu đến đúng thứ tự, không mất gói và có cơ chế kiểm soát lỗi. Giao thức nào phù hợp nhất và thuộc tầng nào trong TCP/IP?",
    options: ["UDP – Application", "TCP – Transport", "IP – Internet", "HTTP – Application"],
    answer: 1, chapter: 3,
    explain: "TCP tại tầng Transport đảm bảo: đánh số thứ tự, ACK, retransmission, kiểm soát lỗi."
  },
  {
    q: "Giao thức nào hoạt động ở tầng Application dùng để lướt Web?",
    options: ["FTP", "HTTP/HTTPS", "SMTP", "DNS"],
    answer: 1, chapter: 3,
    explain: "HTTP/HTTPS (port 80/443) — giao thức web."
  },
  {
    q: "Giao thức phân giải từ tên miền (VD: google.com) sang địa chỉ IP là gì?",
    options: ["DHCP", "ARP", "ICMP", "DNS"],
    answer: 3, chapter: 3,
    explain: "DNS (Domain Name System) phân giải tên miền → IP."
  },
  {
    q: "Giao thức phân giải từ địa chỉ IP sang địa chỉ vật lý MAC là gì?",
    options: ["ARP", "DHCP", "FTP", "Telnet"],
    answer: 0, chapter: 3,
    explain: "ARP (Address Resolution Protocol) tìm MAC từ IP đã biết."
  },
  {
    q: "Lệnh ping kiểm tra kết nối mạng sử dụng giao thức nào?",
    options: ["TCP", "UDP", "ICMP", "IGMP"],
    answer: 2, chapter: 3,
    explain: "Ping dùng ICMP Echo Request/Reply để kiểm tra thông mạng."
  },
  {
    q: "Quá trình nén và mã hóa định dạng dữ liệu diễn ra ở tầng nào trong mô hình OSI?",
    options: ["Tầng 7 (Application)", "Tầng 6 (Presentation)", "Tầng 5 (Session)", "Tầng 4 (Transport)"],
    answer: 1, chapter: 3,
    explain: "Tầng 6 - Presentation: định dạng, mã hóa (SSL/TLS), nén dữ liệu."
  },
  {
    q: "Mô hình TCP/IP chuẩn thực tế (DoD Model) có bao nhiêu tầng?",
    options: ["4", "5", "6", "7"],
    answer: 0, chapter: 3,
    explain: "TCP/IP có 4 tầng: Application, Transport, Internet, Network Access."
  },
  {
    q: "Trong mô hình TCP/IP, tầng Internet tương ứng với tầng nào trong mô hình OSI?",
    options: ["Data Link", "Physical", "Network", "Transport"],
    answer: 2, chapter: 3,
    explain: "Tầng Internet của TCP/IP = tầng Network (3) của OSI — chạy IP, ICMP, ARP."
  },
  {
    q: "Tầng Data Link (Tầng 2) sử dụng loại địa chỉ nào để truyền khung dữ liệu (Frame)?",
    options: ["Địa chỉ IP", "Địa chỉ MAC", "Tên miền", "Port Number"],
    answer: 1, chapter: 3,
    explain: "Tầng 2 - Data Link dùng địa chỉ MAC (vật lý) để đóng Frame."
  },
  {
    q: "Cổng mặc định (Port Default) của dịch vụ Web (HTTP) là bao nhiêu?",
    options: ["21", "25", "80", "443"],
    answer: 2, chapter: 3,
    explain: "HTTP port 80, HTTPS port 443."
  },
  {
    q: "Cổng mặc định của dịch vụ truyền tải tập tin (FTP) là bao nhiêu?",
    options: ["21", "23", "53", "80"],
    answer: 0, chapter: 3,
    explain: "FTP port 21 (control), port 20 (data)."
  },
  {
    q: "Giao thức cấp phát địa chỉ IP động cho máy trạm là gì?",
    options: ["DNS", "DHCP", "ARP", "RDP"],
    answer: 1, chapter: 3,
    explain: "DHCP (Dynamic Host Configuration Protocol) cấp IP động qua quy trình DORA."
  },
  {
    q: "DHCP là viết tắt của:",
    options: ["Dynamic Host Configuration Protocol", "Data Host Control Protocol", "Dynamic Hardware Communication Protocol", "Data Host Configuration Process"],
    answer: 0, chapter: 3,
    explain: "DHCP = Dynamic Host Configuration Protocol — cấp phát IP tự động."
  },
  {
    q: "Chức năng của DHCP khi được triển khai trong mạng là để:",
    options: ["Cấp phát IP động", "Tăng tốc mạng", "Mã hóa dữ liệu", "Kết nối internet"],
    answer: 0, chapter: 3,
    explain: "DHCP tự động cấp phát IP, Subnet Mask, Default Gateway, DNS Server cho thiết bị."
  },
  {
    q: "DHCP hoạt động theo mô hình:",
    options: ["Peer-to-peer", "Client – Server", "Hybrid", "Ring"],
    answer: 1, chapter: 3,
    explain: "DHCP theo mô hình Client-Server. Quy trình cấp phát: Discover → Offer → Request → ACK (DORA)."
  },
  {
    q: "Việc cấu hình cấp phát địa chỉ IP động có đặc điểm:",
    options: ["Không thay đổi", "Do người dùng cấu hình", "Được cấp trong thời gian nhất định (Lease Time)", "Không cần server"],
    answer: 2, chapter: 3,
    explain: "DHCP cấp IP theo Lease Time. Hết hạn → thiết bị gia hạn hoặc nhận IP mới."
  },
  {
    q: "Khi một máy tính mới kết nối vào mạng và tự động nhận địa chỉ IP từ DHCP server, quá trình này chủ yếu liên quan đến tầng nào trong mô hình TCP/IP?",
    options: ["Application", "Transport", "Internet", "Network Access"],
    answer: 0, chapter: 3,
    explain: "DHCP là giao thức tầng Application. Quy trình DORA là giao tiếp ứng dụng client/server."
  },
  {
    q: "Bản chất của cấu hình IP tĩnh là:",
    options: ["IP thay đổi liên tục", "IP do server cấp tự động", "IP cấu hình thủ công", "IP không tồn tại"],
    answer: 2, chapter: 3,
    explain: "IP tĩnh = cấu hình thủ công, không tự đổi. Dùng cho Server, Router, máy in mạng."
  },
  {
    q: "Giao thức gửi Email đi (Outgoing Mail) chuẩn là gì?",
    options: ["POP3", "IMAP", "SMTP", "SNMP"],
    answer: 2, chapter: 3,
    explain: "SMTP (Simple Mail Transfer Protocol) port 25 — gửi email đi."
  },
  {
    q: "Khi gói tin đi từ tầng Application xuống tầng Physical, dữ liệu sẽ được xử lý như thế nào?",
    options: ["Tháo gói (Decapsulation)", "Đóng gói (Encapsulation) thêm các Header", "Xóa bớt dữ liệu", "Mã hóa hoàn toàn thành quang học"],
    answer: 1, chapter: 3,
    explain: "Đi xuống: đóng gói — mỗi tầng thêm Header (tầng 2 thêm cả Trailer). Đi lên: tháo gói."
  },
  {
    q: "Trong cấu hình Router Cisco, lệnh enable dùng để:",
    options: ["Vào mode user", "Vào mode privileged", "Tắt router", "Reset router"],
    answer: 1, chapter: 3,
    explain: "enable: chuyển từ User mode (Router>) sang Privileged mode (Router#)."
  },
  {
    q: "Trong Packet Tracer, lệnh configure terminal (viết tắt: conf t) dùng để:",
    options: ["Thoát router", "Vào mode cấu hình", "Kiểm tra IP", "Ping"],
    answer: 1, chapter: 3,
    explain: "configure terminal: chuyển từ Privileged mode (Router#) sang Global Configuration mode (Router(config)#)."
  },
  {
    q: "Lệnh lưu cấu hình trong chế độ CLI của Packet Tracer là:",
    options: ["save", "write", "store", "commit"],
    answer: 1, chapter: 3,
    explain: "write (hoặc write memory) lưu running-config vào startup-config. Hoặc dùng copy running-config startup-config."
  },
  {
    q: "Lệnh ip helper-address dùng để:",
    options: ["Đổi địa chỉ IP qua router thành gói quảng bá", "Chuyển tiếp DHCP request qua 1 cổng router", "Xóa DHCP request qua 1 cổng router", "Ping server"],
    answer: 1, chapter: 3,
    explain: "ip helper-address chuyển tiếp DHCP broadcast thành unicast để đi qua Router tới DHCP Server ở mạng khác."
  },
  {
    q: "Trong một hệ thống mạng sử dụng DHCP, nhiều máy tính nhận được địa chỉ IP nhưng không truy cập được Internet. Nguyên nhân nào sau đây có khả năng cao nhất?",
    options: ["Thiếu NIC", "Gateway mặc định cấp phát không chính xác", "Switch bị tắt nguồn", "Địa chỉ MAC bị thay đổi"],
    answer: 1, chapter: 3,
    explain: "Máy có IP (DHCP OK) nhưng không ra Internet → Default Gateway sai/thiếu. Gateway là Router để gửi gói ra ngoài LAN. NIC/Switch hỏng thì máy không nhận IP được."
  },
  {
    q: "Chức năng của DHCP khi được cấu hình trong mạng là để:",
    options: ["Cấp phát IP động (kèm Subnet Mask, Gateway, DNS)", "Tăng tốc mạng", "Mã hóa dữ liệu", "Kết nối Internet"],
    answer: 0, chapter: 3,
    explain: "DHCP tự động cấp phát IP + các thông số mạng (Subnet Mask, Default Gateway, DNS Server) cho thiết bị. Không làm tăng tốc/mã hóa/kết nối Internet."
  },

  // ============ CHƯƠNG 4: IPv4 & SUBNETTING (49 câu) ============
  {
    q: "IPv4 có độ dài bao nhiêu bit?",
    options: ["16", "32", "64", "128"],
    answer: 1, chapter: 4,
    explain: "IPv4 dài 32 bit, chia 4 octet (mỗi octet 8 bit). IPv6 dài 128 bit."
  },
  {
    q: "Cấu trúc địa chỉ IPv4 được chia thành bao nhiêu Octet (mỗi Octet 8 bit)?",
    options: ["2", "4", "6", "8"],
    answer: 1, chapter: 4,
    explain: "IPv4 chia 4 octet, mỗi octet 8 bit, giá trị 0-255, cách nhau bởi dấu chấm."
  },
  {
    q: "Địa chỉ IP được chia làm hai phần chính nào?",
    options: ["MAC ID và Host ID", "Network ID và Host ID", "Subnet Mask và Default Gateway", "Domain và IP"],
    answer: 1, chapter: 4,
    explain: "IP = Network ID (phần mạng, cực trái) + Host ID (phần máy, cực phải). Ranh giới do Subnet Mask quy định."
  },
  {
    q: "Vì sao mỗi máy tính gia nhập mạng cần có 1 địa chỉ IP?",
    options: ["Để tăng tốc độ mạng", "Để xác định duy nhất thiết bị trong mạng", "Để mã hóa dữ liệu", "Để truyền file"],
    answer: 1, chapter: 4,
    explain: "IP xác định duy nhất thiết bị trong mạng, cho phép gửi/nhận dữ liệu đúng đích, hỗ trợ định tuyến."
  },
  {
    q: "Subnet mask được dùng để:",
    options: ["Xác định số host trong một net", "Xác định số bit net trong địa chỉ IP", "Xác định địa chỉ mạng (Network Address)", "Xác định dải địa chỉ IP khả dụng"],
    answer: 2, chapter: 4,
    explain: "Subnet mask tách phần Network và phần Host của IP. Phép AND giữa IP và mask → địa chỉ mạng."
  },
  {
    q: "Lớp mạng (Class) nào hỗ trợ số lượng Host tối đa lớn nhất?",
    options: ["Lớp A", "Lớp B", "Lớp C", "Lớp D"],
    answer: 0, chapter: 4,
    explain: "Lớp A: 2^24 - 2 = 16.777.214 host/network — nhiều nhất."
  },
  {
    q: "Dải địa chỉ IP từ 192.168.0.0 đến 192.168.255.255 thuộc lớp IP nào?",
    options: ["Lớp A", "Lớp B", "Lớp C", "Lớp E"],
    answer: 2, chapter: 4,
    explain: "192.x thuộc lớp C (192-223). Dải 192.168.x.x là IP Private lớp C."
  },
  {
    q: "Subnet Mask mặc định của lớp C là gì?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answer: 2, chapter: 4,
    explain: "Lớp C mặc định: 255.255.255.0 (/24) — 3 octet Network, 1 octet Host."
  },
  {
    q: "Địa chỉ IP 127.0.0.1 dùng để làm gì?",
    options: ["Gán cho Router", "Kiểm tra vòng lặp cục bộ (Loopback/Localhost)", "Gửi Broadcast toàn mạng", "Cấp DHCP"],
    answer: 1, chapter: 4,
    explain: "127.0.0.1 = Loopback/Localhost — kiểm tra chính máy mình, không gửi ra mạng."
  },
  {
    q: "Thế nào là địa chỉ Private IP (IP nội bộ)?",
    options: ["Là IP mua từ nhà cung cấp dịch vụ mạng (ISP)", "Là IP không thể định tuyến trực tiếp trên mạng Internet công cộng", "Là IP chuyên dùng cho máy in mạng", "Là IP của máy chủ Google"],
    answer: 1, chapter: 4,
    explain: "Private IP dùng trong mạng nội bộ, không định tuyến ra Internet. Phải qua NAT mới ra được."
  },
  {
    q: "Địa chỉ Network ID có đặc điểm gì?",
    options: ["Tất cả các bit phần Host đều bằng 1", "Tất cả các bit phần Host đều bằng 0", "Dùng để gán cho Gateway", "Giao tiếp ra ngoài Internet"],
    answer: 1, chapter: 4,
    explain: "Network ID: tất cả bit Host = 0. Không gán cho thiết bị được."
  },
  {
    q: "Ký pháp CIDR '/24' tương ứng với Subnet Mask thập phân nào?",
    options: ["255.255.0.0", "255.255.224.0", "255.255.255.0", "255.255.255.128"],
    answer: 2, chapter: 4,
    explain: "/24 = 24 bit Network = 255.255.255.0 (8 bit Host)."
  },
  {
    q: "Subnet mask tương ứng với /24 là:",
    options: ["255.255.0.0", "255.255.255.0", "255.0.0.0", "255.255.255.255"],
    answer: 1, chapter: 4,
    explain: "/24 = 11111111.11111111.11111111.00000000 = 255.255.255.0"
  },
  {
    q: "Cho Subnet Mask ở dạng /19; giá trị SM tương ứng dạng thập phân là:",
    options: ["192.168.1.0", "255.255.19.0", "255.255.240.0", "255.255.224.0"],
    answer: 3, chapter: 4,
    explain: "/19 = 11111111.11111111.11100000.00000000 = 255.255.224.0"
  },
  {
    q: "Ký pháp CIDR '/26' cho biết mượn bao nhiêu bit Host để chia mạng con (từ mạng Lớp C)?",
    options: ["1 bit", "2 bit", "3 bit", "4 bit"],
    answer: 1, chapter: 4,
    explain: "Lớp C mặc định /24. /26 = 24+2 → mượn 2 bit Host."
  },
  {
    q: "Một mạng con mượn 3 bit Host sẽ tạo ra tối đa bao nhiêu Subnet mới?",
    options: ["2", "4", "6", "8"],
    answer: 3, chapter: 4,
    explain: "Số subnet = 2^n (n = số bit mượn). 2^3 = 8 subnet."
  },
  {
    q: "Nếu mượn 2 bit Host từ mạng Lớp C (/26), số Host khả dụng trên mỗi mạng con là bao nhiêu?",
    options: ["126", "62", "30", "14"],
    answer: 1, chapter: 4,
    explain: "/26 → 6 bit host còn lại → 2^6 - 2 = 62 host khả dụng."
  },
  {
    q: "Một mạng được cấu hình với subnet mask /27. Số lượng địa chỉ host sử dụng được là:",
    options: ["14", "30", "62", "126"],
    answer: 1, chapter: 4,
    explain: "/27 → 5 bit host → 2^5 = 32 địa chỉ. Trừ 2 (Network + Broadcast) = 30 host."
  },
  {
    q: "Thông số Default Gateway dùng để làm gì?",
    options: ["Dịch tên miền DNS", "Làm cửa ngõ để máy tính giao tiếp với các mạng bên ngoài (Internet)", "Phát địa chỉ IP", "Chống virus mã hóa"],
    answer: 1, chapter: 4,
    explain: "Default Gateway = cổng Router nội bộ, máy tính gửi gói tin ra mạng ngoài qua đây."
  },
  {
    q: "Lệnh nào trên Windows dùng để xem chi tiết địa chỉ IP và địa chỉ MAC của máy tính?",
    options: ["ipconfig /all", "ping", "tracert", "nslookup"],
    answer: 0, chapter: 4,
    explain: "ipconfig /all hiển thị IP, MAC, Gateway, DNS, DHCP chi tiết."
  },
  {
    q: "Lệnh dùng để kiểm tra IP trên Windows là:",
    options: ["ping", "ipconfig", "tracert", "netstat"],
    answer: 1, chapter: 4,
    explain: "ipconfig xem cấu hình mạng: IP, Subnet Mask, Default Gateway, DNS Server."
  },
  {
    q: "Lệnh giải phóng IP (trả IP về DHCP Server) trên Windows là:",
    options: ["ipconfig /renew", "ipconfig /release", "ipconfig /all", "ipconfig /flush"],
    answer: 1, chapter: 4,
    explain: "ipconfig /release trả IP hiện tại về DHCP. ipconfig /renew xin cấp lại IP mới."
  },
  {
    q: "Một máy tính không nhận được IP từ DHCP Server sẽ tự gán một IP thuộc dải APIPA. Dải APIPA bắt đầu bằng:",
    options: ["10.0.x.x", "172.16.x.x", "192.168.x.x", "169.254.x.x"],
    answer: 3, chapter: 4,
    explain: "APIPA (Automatic Private IP Addressing) cấp IP 169.254.x.x khi không nhận được DHCP."
  },
  {
    q: "IPv6 được phát triển nhằm mục đích chính là gì?",
    options: ["Tăng tốc độ mạng lên gấp đôi", "Giải quyết tình trạng cạn kiệt không gian địa chỉ IPv4", "Thay thế hoàn toàn mô hình OSI", "Dễ nhớ hơn IPv4"],
    answer: 1, chapter: 4,
    explain: "IPv6 (128 bit) giải quyết cạn kiệt IPv4 (32 bit chỉ có ~4 tỷ địa chỉ)."
  },
  {
    q: "Địa chỉ Broadcast của dải mạng 192.168.1.0/24 là bao nhiêu?",
    options: ["192.168.1.1", "192.168.1.254", "192.168.1.255", "192.168.255.255"],
    answer: 2, chapter: 4,
    explain: "Broadcast: tất cả bit Host = 1. /24 → bit host ở octet 4 → 255 → 192.168.1.255."
  },
  {
    q: "Một máy tính được cấu hình địa chỉ IP 192.168.10.75/26. Địa chỉ mạng (Network ID) của máy tính này là:",
    options: ["192.168.10.0/26", "192.168.10.75/26", "192.168.10.64/26", "192.168.10.128/26"],
    answer: 2, chapter: 4,
    explain: "/26 = 255.255.255.192, mỗi subnet 64 địa chỉ. 75 nằm trong khoảng 64-127 → Network ID = 192.168.10.64/26."
  },
  {
    q: "Địa chỉ broadcast của mạng 192.168.10.64/26 là:",
    options: ["192.168.10.126/26", "192.168.10.127/26", "192.168.10.128/26", "192.168.10.255/26"],
    answer: 1, chapter: 4,
    explain: "Mạng 192.168.10.64/26 có 64 địa chỉ (64-127). Broadcast = 127 → 192.168.10.127/26."
  },
  {
    q: "Cho địa chỉ IP 172.16.20.100/27. Địa chỉ nào dưới đây thuộc cùng mạng với địa chỉ trên?",
    options: ["172.16.20.65/27", "172.16.20.95/27", "172.16.20.110/27", "172.16.20.130/27"],
    answer: 2, chapter: 4,
    explain: "/27 → mỗi subnet 32 địa chỉ. 100 thuộc dải 96-127. Chỉ 110 cũng thuộc dải 96-127 → cùng mạng."
  },
  {
    q: "Một phòng máy có 50 máy tính. Quản trị viên muốn cấp phát IP sao cho không lãng phí. Subnet phù hợp nhất là:",
    options: ["/24", "/25", "/26", "/27"],
    answer: 2, chapter: 4,
    explain: "/27 → 30 host (không đủ). /26 → 62 host (đủ cho 50 máy, ít lãng phí). /25 → 126 host (dư). /24 → 254 host (rất lãng)."
  },
  {
    q: "Một doanh nghiệp có ba phòng ban nằm trên ba mạng IP khác nhau. Để các phòng ban trao đổi dữ liệu, cần cấu hình chức năng nào?",
    options: ["DNS", "Routing", "NAT", "DHCP"],
    answer: 1, chapter: 4,
    explain: "3 mạng khác subnet → cần Router + cấu hình Routing để định tuyến gói tin giữa các mạng."
  },
  {
    q: "Trong hệ thống mạng DHCP, nhiều máy nhận IP nhưng không truy cập được Internet. Nguyên nhân có khả năng cao nhất?",
    options: ["Thiếu NIC", "Gateway mặc định cấp phát không chính xác", "Switch bị tắt nguồn", "Địa chỉ MAC bị thay đổi"],
    answer: 1, chapter: 4,
    explain: "Có IP nhưng không ra Internet → Default Gateway sai/không có. Máy vẫn LAN được nhưng không ra ngoài."
  },
  {
    q: "Một trường đại học có hơn 1.000 máy tính thường xuyên thay đổi vị trí. Phương án quản lý IP phù hợp nhất?",
    options: ["Gán IP tĩnh cho toàn bộ máy", "DHCP cho máy trạm, IP tĩnh cho máy chủ và thiết bị mạng", "Không sử dụng DHCP", "Đặt cùng một IP cho nhiều máy"],
    answer: 1, chapter: 4,
    explain: "Máy trạm dùng DHCP (linh hoạt), máy chủ/router/máy in dùng IP tĩnh (cố định)."
  },
  {
    q: "Một doanh nghiệp dự kiến mở rộng từ 40 lên 100 máy trong 2 năm. Khi thiết kế IP, giải pháp hợp lý nhất là:",
    options: ["Thiết kế đúng cho 40 máy hiện tại", "Sử dụng subnet chỉ đủ cho 50 host", "Dự phòng không gian địa chỉ để hỗ trợ mở rộng", "Cấp phát IP ngẫu nhiên"],
    answer: 2, chapter: 4,
    explain: "Cần tính đến khả năng mở rộng (Scalability). Chọn dải IP đủ cho 100 máy tương lai, tránh chia lại subnet sau này."
  },
  {
    q: "Địa chỉ 192.168.1.128/24 là địa chỉ:",
    options: ["Net", "Broadcast", "Host", "Không xác định"],
    answer: 2, chapter: 4,
    explain: "/24 → bit host ở octet 4. .128 không phải .0 (Net) và không phải .255 (Broadcast) → là Host."
  },
  {
    q: "Địa chỉ Net của địa chỉ 192.168.1.2/24 là:",
    options: ["192.168.1.255/24", "192.168.1.0/24", "192.168.0.0/24", "192.168.1.1/24"],
    answer: 1, chapter: 4,
    explain: "IP 192.168.1.2 AND mask 255.255.255.0 = 192.168.1.0. Đây là Network ID."
  },
  {
    q: "Địa chỉ Broadcast của 192.168.1.0/26 là:",
    options: ["192.168.255.255/26", "192.168.1.255/26", "192.168.1.63/26", "192.168.255.63/26"],
    answer: 2, chapter: 4,
    explain: "/26 → mỗi subnet 64 địa chỉ. Subnet đầu: .0-.63. Broadcast = .63 → 192.168.1.63/26."
  },
  {
    q: "Địa chỉ Net của 184.156.12.65/26 là:",
    options: ["184.156.12.0/26", "184.156.12.64/26", "184.156.12.128/26", "184.156.12.255/26"],
    answer: 1, chapter: 4,
    explain: "/26 → mỗi subnet 64 địa chỉ. 65 thuộc dải 64-127 → Network ID = 184.156.12.64/26."
  },
  {
    q: "Tính địa chỉ Broadcast của net chứa địa chỉ 184.156.12.65/26:",
    options: ["184.156.12.63/26", "184.156.12.127/26", "184.156.12.255/26", "184.156.12.0/26"],
    answer: 1, chapter: 4,
    explain: "184.156.12.65/26 thuộc net 184.156.12.64/26 (dải 64-127). Broadcast = 184.156.12.127/26."
  },
  {
    q: "Một doanh nghiệp có 300 máy tính thường xuyên thay đổi nhân sự. Giải pháp cấp phát IP phù hợp nhất?",
    options: ["Gán IP tĩnh cho tất cả", "Sử dụng DHCP Server", "Không sử dụng địa chỉ IP", "Đặt cùng IP cho nhiều máy"],
    answer: 1, chapter: 4,
    explain: "DHCP tự động cấp IP, Subnet Mask, Gateway, DNS → dễ quản lý, ít sai sót, tiết kiệm thời gian."
  },
  {
    q: "Một máy tính không nhận được địa chỉ IP động từ DHCP Server. Nguyên nhân hợp lý nhất?",
    options: ["Máy không có tên miền", "DHCP Server hoặc kết nối đến DHCP gặp sự cố", "Máy không cài trình duyệt", "Máy không có ổ cứng"],
    answer: 1, chapter: 4,
    explain: "Không nhận IP → DHCP Server tắt/lỗi, hoặc kết nối đến DHCP bị gián đoạn, hoặc Switch/Router chặn gói DHCP."
  },
  {
    q: "Nếu Subnet Mask là 255.255.255.224, bước nhảy (Block size) của mạng con là bao nhiêu?",
    options: ["16", "32", "64", "128"],
    answer: 1, chapter: 4,
    explain: "Block size = 256 - 224 = 32. → Các Net ID kế tiếp: .0, .32, .64, .96, .128, .160, .192, .224."
  },
  {
    q: "Trong cấu hình Router, lệnh ip helper-address dùng trong trường hợp nào?",
    options: ["Đổi IP Router", "Chuyển tiếp gói tin Broadcast của DHCP sang DHCP Server ở mạng khác", "Xóa cấu hình DHCP", "Khóa mạng"],
    answer: 1, chapter: 4,
    explain: "ip helper-address chuyển DHCP broadcast thành unicast, gửi tới DHCP Server ở mạng khác."
  },
  {
    q: "Địa chỉ IP 192.168.1.0/24 là địa chỉ gì?",
    options: ["Địa chỉ Host", "Địa chỉ Network ID", "Địa chỉ Broadcast", "Địa chỉ Loopback"],
    answer: 1, chapter: 4,
    explain: "/24 → bit host ở octet 4. Octet 4 = 0 → tất cả bit host = 0 → Network ID."
  },
  {
    q: "Địa chỉ IP 192.168.1.255/24 là địa chỉ gì?",
    options: ["Địa chỉ Host", "Địa chỉ Network ID", "Địa chỉ Broadcast", "Địa chỉ Loopback"],
    answer: 2, chapter: 4,
    explain: "/24 → bit host ở octet 4. Octet 4 = 255 → tất cả bit host = 1 → Broadcast."
  },
  {
    q: "Subnet Mask 255.255.255.192 tương ứng với CIDR nào?",
    options: ["/24", "/25", "/26", "/27"],
    answer: 2, chapter: 4,
    explain: "255.255.255.192 = 11111111.11111111.11111111.11000000 = 26 bit 1 → /26."
  },
  {
    q: "Subnet Mask 255.255.255.240 tương ứng với CIDR nào?",
    options: ["/26", "/27", "/28", "/29"],
    answer: 2, chapter: 4,
    explain: "255.255.255.240 = 11111111.11111111.11111111.11110000 = 28 bit 1 → /28."
  },
  {
    q: "Một subnet /30 có bao nhiêu host khả dụng?",
    options: ["0", "1", "2", "6"],
    answer: 2, chapter: 4,
    explain: "/30 → 2 bit host → 2^2 - 2 = 2 host. Thường dùng cho point-to-point giữa 2 router."
  },
  {
    q: "Một doanh nghiệp dự kiến mở rộng từ 40 lên khoảng 100 máy tính trong vòng hai năm tới. Khi thiết kế hệ thống địa chỉ IP, giải pháp nào là hợp lý nhất?",
    options: ["Thiết kế đúng cho 40 máy hiện tại", "Sử dụng subnet chỉ đủ cho 50 host", "Dự phòng không gian địa chỉ để hỗ trợ mở rộng trong tương lai", "Cấp phát IP ngẫu nhiên cho từng thiết bị"],
    answer: 2, chapter: 4,
    explain: "Thiết kế mạng cần tính đến khả năng mở rộng (Scalability). Chọn dải IP có đủ không gian cho 100 máy tương lai để tránh phải chia lại subnet, giảm chi phí quản trị."
  },
  {
    q: "Tính địa chỉ Broadcast của net chứa địa chỉ 184.156.12.65/26:",
    options: ["184.156.12.63/26", "184.156.12.127/26", "184.156.12.255/26", "184.156.12.0/26"],
    answer: 1, chapter: 4,
    explain: "/26 → SM=255.255.255.192, mỗi subnet 64 địa chỉ. 65 thuộc subnet 184.156.12.64/26 (64-127) → Broadcast = 184.156.12.127."
  },

  // ============ CHƯƠNG 6: CLOUD COMPUTING (15 câu) ============
  {
    q: "Theo định nghĩa của NIST, điều kiện để một hệ thống được xem là điện toán đám mây là gì?",
    options: ["Có sử dụng Internet", "Có máy chủ ảo hóa", "Đáp ứng đủ 5 đặc trưng cơ bản của cloud", "Có trung tâm dữ liệu"],
    answer: 2, chapter: 6,
    explain: "Theo NIST, hệ thống được xem là cloud khi đáp ứng đủ 5 đặc trưng: On-demand, Broad access, Pooling, Elasticity, Measured service."
  },
  {
    q: "Đặc trưng nào cho phép người dùng tự tạo máy chủ hoặc dịch vụ mà không cần liên hệ nhà cung cấp?",
    options: ["Resource Pooling", "Broad Network Access", "Measured Service", "On-demand Self-service"],
    answer: 3, chapter: 6,
    explain: "On-demand Self-service: khách hàng tự tạo tài nguyên qua portal (AWS Console) không cần nhân viên hỗ trợ."
  },
  {
    q: "Sự co giãn nhanh chóng (Rapid elasticity) trong Cloud mang lại lợi ích thực tế nào?",
    options: ["Tự động tăng máy chủ khi tải tăng đột biến và thu hồi khi rảnh", "Tốc độ mạng nhanh hơn cáp quang", "Không bao giờ bị hack", "Tự động thiết kế giao diện web"],
    answer: 0, chapter: 6,
    explain: "Rapid elasticity: tự scale up khi tải cao, scale down khi rảnh — trả tiền đúng mức sử dụng."
  },
  {
    q: "Dịch vụ Cloud tính tiền người dùng dựa trên mức tiêu thụ thực tế thuộc đặc trưng nào?",
    options: ["Resource pooling", "Broad network access", "Measured service", "Hybrid service"],
    answer: 2, chapter: 6,
    explain: "Measured Service: đo lường mức sử dụng → tính phí Pay-as-you-go như đồng hồ điện/nước."
  },
  {
    q: "Lợi ích tài chính lớn nhất khi chuyển từ máy chủ vật lý (On-premise) lên Cloud là gì?",
    options: ["Chuyển chi phí đầu tư ban đầu (CapEx) thành chi phí vận hành hàng tháng (OpEx)", "Miễn phí tiền điện", "Không phải đóng thuế", "Lương IT tăng lên"],
    answer: 0, chapter: 6,
    explain: "Cloud chuyển CapEx (đầu tư vốn mua server) → OpEx (chi phí vận hành hàng tháng)."
  },
  {
    q: "Doanh nghiệp muốn sử dụng Gmail hoặc Microsoft 365 thuộc mô hình dịch vụ nào?",
    options: ["IaaS", "PaaS", "SaaS", "Hybrid Cloud"],
    answer: 2, chapter: 6,
    explain: "Gmail, Microsoft 365 là SaaS — nhà cung cấp lo toàn bộ, khách hàng chỉ việc dùng qua Web."
  },
  {
    q: "Mô hình Cloud nào cung cấp cho người dùng một phần mềm hoàn chỉnh chạy sẵn trên web (Ví dụ: Gmail, Office 365)?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    answer: 2, chapter: 6,
    explain: "SaaS (Software as a Service): nhà cung cấp lo toàn bộ, khách hàng chỉ việc dùng."
  },
  {
    q: "Khi thuê máy chủ ảo (EC2) trên AWS, khách hàng tự cài hệ điều hành và phần mềm. Đây là mô hình dịch vụ nào?",
    options: ["IaaS (Hạ tầng)", "PaaS (Nền tảng)", "SaaS (Phần mềm)", "DaaS (Dữ liệu)"],
    answer: 0, chapter: 6,
    explain: "IaaS: nhà cung cấp chỉ cho hạ tầng (server, storage, network). Khách hàng lo OS, app, data."
  },
  {
    q: "Mô hình đám mây nào do chính doanh nghiệp tự xây dựng và quản lý độc quyền tại trung tâm dữ liệu nội bộ?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: 1, chapter: 6,
    explain: "Private Cloud: doanh nghiệp tự xây, kiểm soát tuyệt đối, phù hợp ngân hàng/y tế/chính phủ."
  },
  {
    q: "Đám mây lai (Hybrid Cloud) là sự kết hợp giữa:",
    options: ["Private Cloud và Public Cloud", "IaaS và SaaS", "Cáp quang và Sóng vô tuyến", "Hub và Switch"],
    answer: 0, chapter: 6,
    explain: "Hybrid Cloud = Public + Private. Data nhạy cảm → Private, App public → Public."
  },
  {
    q: "Một ngân hàng lưu dữ liệu khách hàng trên hệ thống riêng nhưng triển khai website công khai trên AWS. Mô hình triển khai phù hợp nhất là:",
    options: ["Public Cloud", "Private Cloud", "Community Cloud", "Hybrid Cloud"],
    answer: 3, chapter: 6,
    explain: "Hybrid Cloud: Data nhạy cảm (khách hàng) → Private Cloud. Website công khai → Public Cloud (AWS)."
  },
  {
    q: "Yếu tố nào KHÔNG phải là lợi ích chính của điện toán đám mây so với mô hình on-premise?",
    options: ["Giảm đầu tư ban đầu", "Mở rộng tài nguyên nhanh chóng", "Luôn kiểm soát toàn bộ hạ tầng vật lý", "Thanh toán theo mức sử dụng"],
    answer: 2, chapter: 6,
    explain: "Cloud KHÔNG cho phép kiểm soát toàn bộ hạ tầng vật lý (đó là đặc điểm của On-premise). Hạ tầng do nhà cung cấp quản lý."
  },
  {
    q: "Gmail, Google Drive, Microsoft 365, Zoom, Netflix là ví dụ của mô hình Cloud nào?",
    options: ["IaaS", "PaaS", "SaaS", "Private Cloud"],
    answer: 2, chapter: 6,
    explain: "Đây đều là SaaS — phần mềm hoàn chỉnh chạy trên web, khách hàng chỉ việc tạo tài khoản và dùng."
  },
  {
    q: "Theo định nghĩa của NIST (2011), điện toán đám mây (Cloud Computing) là gì?",
    options: ["Mô hình mua đứt phần cứng máy chủ về tự quản lý", "Mô hình cho phép truy cập tài nguyên tính toán dùng chung qua mạng một cách thuận tiện, theo nhu cầu (Pay-as-you-go)", "Phần mềm lưu trữ dữ liệu trên USB", "Mạng xã hội kết nối trực tuyến"],
    answer: 1, chapter: 6,
    explain: "NIST SP 800-145: Cloud là mô hình truy cập tài nguyên tính toán qua mạng, theo nhu cầu, pay-as-you-go."
  },
  {
    q: "Đặc trưng 'Truy cập mạng rộng rãi' (Broad Network Access) của Cloud nghĩa là gì?",
    options: ["Chỉ truy cập qua cable", "Truy cập mọi lúc, mọi nơi qua Internet trên nhiều thiết bị", "Chỉ admin mới truy cập được", "Truy cập qua vệ tinh"],
    answer: 1, chapter: 6,
    explain: "Broad Network Access: truy cập cloud qua Internet từ PC, mobile, tablet — mọi lúc, mọi nơi."
  }
];

if (typeof window !== 'undefined') window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
