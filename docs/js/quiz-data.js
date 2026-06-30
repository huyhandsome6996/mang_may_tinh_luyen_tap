/* ===========================================
   NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM
   100+ câu, chia 5 chương + đề tổng hợp
   =========================================== */

const QUIZ_QUESTIONS = [
  // ============ CHƯƠNG 1: KHÁI NIỆM CƠ BẢN (20 câu) ============
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
    q: "Đặc điểm nổi bật của mạng WAN là gì?",
    options: ["Phạm vi hẹp, tốc độ rất cao", "Tốc độ phụ thuộc đường truyền, kết nối khoảng cách rất lớn", "Chỉ dùng cáp đồng", "Không thể kết nối Internet"],
    answer: 1, chapter: 1,
    explain: "WAN kết nối phạm vi quốc gia/lục địa, tốc độ phụ thuộc viễn thông, độ trễ cao. Internet là WAN lớn nhất."
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
    explain: "Workgroup dùng file SAM (Security Accounts Manager) cục bộ trên từng máy để chứng thực người dùng."
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
    q: "Ký hiệu 'NIC' trong mạng máy tính có nghĩa là gì?",
    options: ["Network Internal Card", "Network Interface Card (Card mạng)", "Node Internet Connection", "Network Interconnect Cable"],
    answer: 1, chapter: 1,
    explain: "NIC = Network Interface Card, card giao tiếp mạng, có địa chỉ MAC duy nhất."
  },
  {
    q: "Mạng ARPANET ra đời năm nào?",
    options: ["1960", "1970", "1980", "1990"],
    answer: 1, chapter: 1,
    explain: "ARPANET ra đời năm 1970, là mạng chuyển mạch gói đầu tiên, tiền thân của Internet."
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
    q: "Internet chính thức ra đời năm nào khi DARPA yêu cầu dùng TCP/IP?",
    options: ["1970", "1980", "1983", "1995"],
    answer: 2, chapter: 1,
    explain: "Năm 1983, DARPA yêu cầu mọi máy kết nối ARPANET phải dùng TCP/IP → Internet chính thức ra đời."
  },
  {
    q: "Topology Bus có ưu điểm gì?",
    options: ["An toàn nhất", "Ít cáp, dễ lắp đặt, giá rẻ", "Tốc độ cao nhất", "Dễ cô lập lỗi"],
    answer: 1, chapter: 1,
    explain: "Bus topology dùng 1 đường trục chính → ít cáp, dễ lắp, rẻ. Nhưng hỏng 1 đoạn → toàn mạng sập."
  },

  // ============ CHƯƠNG 2: MÔI TRƯỜNG & THIẾT BỊ (20 câu) ============
  {
    q: "Loại cáp mạng nào không bị ảnh hưởng bởi nhiễu sóng điện từ (EMI)?",
    options: ["Cáp đồng trục", "Cáp UTP", "Cáp quang", "Cáp STP"],
    answer: 2, chapter: 2,
    explain: "Cáp quang truyền bằng ánh sáng trong lõi thủy tinh → hoàn toàn miễn nhiễm nhiễu điện từ."
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
    q: "Thiết bị mạng nào hoạt động bằng cách nhận gói tin ở một cổng và đẩy ra tất cả các cổng còn lại (Broadcast)?",
    options: ["Switch", "Router", "Hub", "Firewall"],
    answer: 2, chapter: 2,
    explain: "Hub broadcast ra mọi cổng → miền đụng độ lớn. Hub thuộc tầng 1 OSI."
  },
  {
    q: "Switch thông minh hơn Hub ở điểm nào?",
    options: ["Gửi dữ liệu ra mọi cổng", "Chỉ hoạt động ở tầng Network", "Có khả năng đọc địa chỉ MAC và chuyển dữ liệu đến đúng cổng đích", "Chống được mọi loại virus"],
    answer: 2, chapter: 2,
    explain: "Switch đọc MAC đích, tra MAC Table, gửi chỉ ra cổng đích (unicast) — chia nhỏ collision domain."
  },
  {
    q: "Bảng MAC (MAC Table) được lưu trữ và sử dụng bởi thiết bị nào?",
    options: ["Hub", "Switch", "Repeater", "Modem"],
    answer: 1, chapter: 2,
    explain: "Switch học MAC qua frame nhận được, lưu vào MAC Table để chuyển mạch."
  },
  {
    q: "Thiết bị nào có chức năng kết nối các mạng (Subnet/LAN) khác nhau và định tuyến đường đi cho gói tin?",
    options: ["Switch", "Hub", "Router", "Bridge"],
    answer: 2, chapter: 2,
    explain: "Router thuộc tầng 3, dùng IP và Routing Table để định tuyến giữa các mạng khác nhau."
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
    q: "Bảng định tuyến (Routing Table) được lưu trữ trên thiết bị nào?",
    options: ["Switch", "Router", "Hub", "PC"],
    answer: 1, chapter: 2,
    explain: "Router dùng Routing Table để chọn đường đi tốt nhất cho gói tin."
  },
  {
    q: "Repeater hoạt động ở tầng nào của mô hình OSI?",
    options: ["Tầng 1 (Physical)", "Tầng 2 (Data Link)", "Tầng 3 (Network)", "Tầng 4 (Transport)"],
    answer: 0, chapter: 2,
    explain: "Repeater chỉ khuếch đại tín hiệu vật lý → tầng 1 (Physical Layer)."
  },

  // ============ CHƯƠNG 3: OSI & TCP/IP (20 câu) ============
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
    q: "Giao thức UDP (User Datagram Protocol) có đặc điểm gì nổi bật?",
    options: ["Đảm bảo không mất gói tin", "Truyền tải rất chậm", "Truyền tải nhanh, không cần thiết lập kết nối trước, có thể mất gói", "Yêu cầu phải xác nhận khi nhận đủ gói tin"],
    answer: 2, chapter: 3,
    explain: "UDP không kết nối, không ACK, gửi ngay — nhanh nhưng có thể mất gói. Dùng cho streaming, game."
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

  // ============ CHƯƠNG 4: IPv4 & SUBNETTING (20 câu) ============
  {
    q: "Địa chỉ IPv4 có tổng chiều dài bao nhiêu bit?",
    options: ["16 bit", "32 bit", "64 bit", "128 bit"],
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
    q: "Địa chỉ Broadcast của dải mạng 192.168.1.0/24 là bao nhiêu?",
    options: ["192.168.1.1", "192.168.1.254", "192.168.1.255", "192.168.255.255"],
    answer: 2, chapter: 4,
    explain: "Broadcast: tất cả bit Host = 1. /24 → bit host ở octet 4 → 255. → 192.168.1.255."
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
    q: "Nếu mượn 2 bit Host từ mạng Lớp C (/26), số Host khả dụng trên mỗi mạng con là bao nhiêu? (Công thức 2^m - 2)",
    options: ["126", "62", "30", "14"],
    answer: 1, chapter: 4,
    explain: "/26 → 6 bit host còn lại → 2^6 - 2 = 62 host khả dụng."
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
    q: "Một máy tính không nhận được IP từ DHCP Server sẽ tự gán một IP thuộc dải APIPA. Dải APIPA bắt đầu bằng:",
    options: ["10.0.x.x", "172.16.x.x", "192.168.x.x", "169.254.x.x"],
    answer: 3, chapter: 4,
    explain: "APIPA (Automatic Private IP Addressing) cấp IP 169.254.x.x khi không nhận được DHCP — dấu hiệu mạng có vấn đề."
  },
  {
    q: "Nếu Subnet Mask là 255.255.255.224, bước nhảy (Block size) của mạng con là bao nhiêu?",
    options: ["16", "32", "64", "128"],
    answer: 1, chapter: 4,
    explain: "Block size = 256 - 224 = 32. → Các Net ID kế tiếp: .0, .32, .64, .96, .128, .160, .192, .224."
  },
  {
    q: "IPv6 được phát triển nhằm mục đích chính là gì?",
    options: ["Tăng tốc độ mạng lên gấp đôi", "Giải quyết tình trạng cạn kiệt không gian địa chỉ IPv4", "Thay thế hoàn toàn mô hình OSI", "Dễ nhớ hơn IPv4"],
    answer: 1, chapter: 4,
    explain: "IPv6 (128 bit) giải quyết cạn kiệt IPv4 (32 bit chỉ có ~4 tỷ địa chỉ)."
  },
  {
    q: "Trong cấu hình Router, lệnh ip helper-address dùng trong trường hợp nào?",
    options: ["Đổi IP Router", "Chuyển tiếp gói tin Broadcast của DHCP sang một Router khác khác mạng", "Xóa cấu hình DHCP", "Khóa mạng"],
    answer: 1, chapter: 4,
    explain: "ip helper-address chuyển DHCP broadcast thành unicast, gửi tới DHCP Server ở mạng khác."
  },

  // ============ CHƯƠNG 5: WINDOWS SERVER (10 câu) ============
  {
    q: "Trong Windows Server, để ngăn chặn người dùng đặt mật khẩu quá ngắn hoặc đơn giản, Admin cần cấu hình ở đâu?",
    options: ["File Explorer", "Local Security Policy / Group Policy", "Device Manager", "Task Manager"],
    answer: 1, chapter: 5,
    explain: "Group Policy (gpedit.msc) → Computer Configuration → Windows Settings → Security Settings → Account Policies → Password Policy."
  },
  {
    q: "Lệnh trên cửa sổ Run để mở công cụ chỉnh sửa Group Policy cục bộ là gì?",
    options: ["cmd.exe", "regedit.exe", "gpedit.msc", "services.msc"],
    answer: 2, chapter: 5,
    explain: "Start → Run → gpedit.msc mở Group Policy Editor."
  },
  {
    q: "NTFS Permissions khác biệt gì so với Share Permissions?",
    options: ["Chỉ áp dụng khi truy cập qua mạng", "Áp dụng cho cả truy cập mạng và đăng nhập trực tiếp (Local) lên máy", "Không thể phân quyền cho thư mục", "Kém bảo mật hơn"],
    answer: 1, chapter: 5,
    explain: "Share Permission chỉ áp dụng khi truy cập qua mạng. NTFS Permission áp dụng cả local và network."
  },
  {
    q: "Tính năng Disk Quota trên hệ thống tệp NTFS dùng để làm gì?",
    options: ["Mã hóa ổ đĩa", "Chống phân mảnh ổ cứng", "Giới hạn dung lượng lưu trữ tối đa của một User trên phân vùng", "Nén tệp tin tự động"],
    answer: 2, chapter: 5,
    explain: "Disk Quota giới hạn dung lượng tối đa user có thể lưu trữ trên partition NTFS."
  },
  {
    q: "Để nhóm các User lại với nhau thành một phòng ban nhằm dễ dàng áp dụng chính sách (Policy) trong Active Directory, ta tạo đối tượng nào?",
    options: ["Domain (Miền)", "Tree (Cây)", "OU (Organizational Unit)", "Forest (Rừng)"],
    answer: 2, chapter: 5,
    explain: "OU là vật chứa user/group/máy tính, có thể áp dụng Group Policy riêng."
  },
  {
    q: "Quá trình chứng thực tài khoản đăng nhập trên hệ thống Domain Server do giao thức nào đảm nhiệm chính?",
    options: ["HTTP", "Kerberos", "SMTP", "DHCP"],
    answer: 1, chapter: 5,
    explain: "Kerberos là giao thức chứng thực mặc định trong Active Directory."
  },
  {
    q: "Trong Windows, nếu một User thuộc nhóm Administrators, User đó có quyền gì?",
    options: ["Quyền thấp nhất", "Không có quyền cài phần mềm", "Quyền quản trị cao nhất, toàn quyền can thiệp hệ thống", "Chỉ được phép đổi mật khẩu cá nhân"],
    answer: 2, chapter: 5,
    explain: "Administrators có toàn quyền: cài đặt, sửa hệ thống, quản lý user khác."
  },
  {
    q: "Lệnh nào dùng để chuyển đổi partition FAT/FAT32 sang NTFS mà không mất dữ liệu?",
    options: ["format /fs:ntfs", "convert <ổ đĩa>: /fs:ntfs", "diskpart", "chkdsk /ntfs"],
    answer: 1, chapter: 5,
    explain: "Lệnh convert <ổ>: /fs:ntfs chuyển đổi FAT/FAT32 → NTFS mà không mất dữ liệu."
  },
  {
    q: "File nào lưu trữ dữ liệu Active Directory trên Domain Controller?",
    options: ["SAM", "NTDS.DIT", "system.dat", "boot.ini"],
    answer: 1, chapter: 5,
    explain: "NTDS.DIT là cơ sở dữ liệu Active Directory, lưu trên Domain Controller."
  },
  {
    q: "Công cụ nào dùng để nâng cấp Standalone Server thành Domain Controller?",
    options: ["dcpromo", "adsetup", "promote", "dcconfig"],
    answer: 0, chapter: 5,
    explain: "DCPROMO (Active Directory Installation Wizard) nâng cấp Server → DC hoặc giáng cấp DC → Server."
  },

  // ============ CHƯƠNG 6: CLOUD COMPUTING (10 câu) ============
  {
    q: "Theo định nghĩa của NIST, điện toán đám mây (Cloud Computing) là gì?",
    options: ["Mô hình mua đứt phần cứng máy chủ về tự quản lý", "Mô hình cho phép truy cập tài nguyên tính toán dùng chung qua mạng một cách thuận tiện, theo nhu cầu (Pay-as-you-go)", "Phần mềm lưu trữ dữ liệu trên USB", "Mạng xã hội kết nối trực tuyến"],
    answer: 1, chapter: 6,
    explain: "NIST SP 800-145: Cloud là mô hình truy cập tài nguyên tính toán qua mạng, theo nhu cầu, pay-as-you-go."
  },
  {
    q: "Đặc trưng 'Tự phục vụ theo nhu cầu' (On-demand self-service) của Cloud nghĩa là gì?",
    options: ["Phải gọi điện cho nhà mạng để mở server", "Máy chủ tự sửa lỗi phần cứng", "Khách hàng tự khởi tạo tài nguyên qua cổng thông tin mà không cần nhân viên hỗ trợ", "Không phải trả tiền khi sử dụng"],
    answer: 2, chapter: 6,
    explain: "On-demand: khách hàng tự lên portal (AWS Console, Azure Portal) khởi tạo tài nguyên 24/7."
  },
  {
    q: "Sự co giãn nhanh chóng (Rapid elasticity) trong Cloud mang lại lợi ích thực tế nào?",
    options: ["Tự động tăng cường máy chủ khi lượng người dùng tăng đột biến và tự thu hồi khi rảnh rỗi", "Tốc độ mạng nhanh hơn cáp quang", "Không bao giờ bị hack", "Tự động thiết kế giao diện web"],
    answer: 0, chapter: 6,
    explain: "Rapid elasticity: tự scale up khi tải cao, scale down khi rảnh — trả tiền đúng mức sử dụng."
  },
  {
    q: "Dịch vụ Cloud tính tiền người dùng dựa trên mức tiêu thụ thực tế (điện, nước, tài nguyên) thuộc đặc trưng nào?",
    options: ["Resource pooling", "Broad network access", "Measured service", "Hybrid service"],
    answer: 2, chapter: 6,
    explain: "Measured Service: đo lường mức sử dụng → tính phí Pay-as-you-go như đồng hồ điện/nước."
  },
  {
    q: "Lợi ích tài chính lớn nhất khi chuyển từ máy chủ vật lý (On-premise) lên Đám mây là gì?",
    options: ["Chuyển chi phí đầu tư ban đầu (CapEx) thành chi phí vận hành hàng tháng (OpEx)", "Miễn phí tiền điện", "Không phải đóng thuế", "Lương IT tăng lên"],
    answer: 0, chapter: 6,
    explain: "Cloud chuyển CapEx (đầu tư vốn mua server) → OpEx (chi phí vận hành hàng tháng)."
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
    q: "Gmail, Google Drive, Microsoft 365, Zoom là ví dụ của mô hình Cloud nào?",
    options: ["IaaS", "PaaS", "SaaS", "Private Cloud"],
    answer: 2, chapter: 6,
    explain: "Đây đều là SaaS — phần mềm hoàn chỉnh chạy trên web, khách hàng chỉ việc tạo tài khoản và dùng."
  }
];

if (typeof window !== 'undefined') window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
