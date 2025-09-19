// 成员详情信息
const memberDetails = {
  yuyu: `
    <h2 style="text-align: center;">Yuyu Jia 贾羽宇</h2>
    <img src="../src/images/people/shijie.jpg" alt="Yuyu Jia" class="member-image">
    <p style="text-align: center;">B.S. from Nantong University</p>
    <p style="text-align: center;">Email: jiayy1@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Research interests include acoustic manipulation, acoustic tweezers, and magnetidue robotics. She enjoys painting and exploring novel biomedical applications of acoustic fields.</p>
  `,
  chengxi: `
    <h2 style="text-align: center;">Chengxi Zhong 钟承希</h2>
    <img src="../src/images/people/chengxi.jpg" alt="Chengxi Zhong" class="member-image">
    <p style="text-align: center;font-weight:bold;">首批中国科协青年人才托举工程博士生专项</p>
    <p style="text-align: center;">B.S. from Tianjin University of Technology</p>
    <p style="text-align: center;">Email: zhongchx@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Focused on real-time acoustic holography and AI-enhanced field reconstruction techniques. She enjoys coding and is passionate about everything in daily life. She's the person that consistently keep a healthy sleeping time</p>
  `,
  jiaqi: `
    <h2 style="text-align: center;">Jiaqi Li 李家齐</h2>
    <img src="../src/images/people/jiaqi.jpg" alt="Jiaqi Li" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: lijq1@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Interested in hardware construction and manipulation, in charge of the acoustic tweezers project. She likes playing chess and is keen on riding bicycles.</p>
  `,
  yuting: `
    <h2 style="text-align: center;">Yuting Yang 杨宇婷</h2>
    <img src="../src/images/people/yuting.jpg" alt="Yuting Yang" class="member-image">
    <p style="text-align: center;">B.S. from Jilin University</p>
    <p style="text-align: center;">Email: yangyt1@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Focus on ultrasound imaging and smart actuation. She enjoys photography and is devoted to enhancing image-guided robotic intervention techniques.</p>
  `,
  mingyue: `
    <h2 style="text-align: center;">Mingyue Wang 王铭悦</h2>
    <img src="../src/images/people/mingyue.jpg" alt="Mingyue Wang" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: wangmy1@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Mingyue Wang received the B.S. degree in computer science and technology from ShanghaiTech University, Shanghai, China, in 2021. He is currently pursuing the Ph.D. degree with Advanced Micro-Nano Robots Lab, ShanghaiTech University, Shanghai, China. His research interests include acoustic manipulation, and micro robotic manipulation.</p>
  `,
  zhenhuan: `
    <h2 style="text-align: center;">Zhenhuan Sun 孙震寰</h2>
    <img src="../src/images/people/zhenhuan.jpg" alt="Zhenhuan Sun" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: sunzhh2022@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Hard and strong theoretical fundamentals, with a focus on acoustic manipulation and control systems. He likes playing video games.</p>
  `,
  fuxiang: `
    <h2 style="text-align: center;">Xiang Fu 符翔</h2>
    <img src="../src/images/people/fuxiang.jpg" alt="Xiang Fu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: fuxiang2022@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Works on real-time control algorithms and embedded systems, and is in charge of nano-scale 3D surface reconstruction and nanorobot manipulation. He enjoys playing video games.</p>
  `,
  liuqing: `
    <h2 style="text-align: center;">Qing Liu 刘晴</h2>
    <img src="../src/images/people/liuqing.jpg" alt="Qing Liu" class="member-image">
    <p style="text-align: center;font-weight:bold;">上海市优秀毕业生</p>
    <p style="text-align: center;">B.S. from Central South University</p>
    <p style="text-align: center;">Email: liuqing2022@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Research interests include acoustic field modeling and system integration. She enjoys calligraphy and focuses on multi-physics simulation and optimization of acoustic manipulation systems.</p>
  `,
  siyuan: `
    <h2 style="text-align: center;">Siyuan An 安思远</h2>
    <img src="../src/images/people/siyuan.jpg" alt="Siyuan An" class="member-image">
    <p style="text-align: center;">B.S. from Shandong University</p>
    <p style="text-align: center;">Email: ansy2022@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Focus on acoustic levitation and robotic manipulation. He enjoys watching science fiction and is exploring levitated multi-agent microrobot systems for complex task execution.</p>
  `,
  qingyi: `
    <h2 style="text-align: center;">Qingyi Lu 陆清怡</h2>
    <img src="../src/images/people/qingyi.jpg" alt="Qingyi Lu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: luqy2023@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Interested in bio-acoustic systems and signal processing. She enjoys hiking and is dedicated to improving signal acquisition methods in biological environments using acoustic sensing.</p>
  `,
  yujie: `
    <h2 style="text-align: center;">Yujie Jiang 姜昱婕</h2>
    <img src="../src/images/people/yujie.jpg" alt="Yujie Jiang" class="member-image">
    <p style="text-align: center;font-weight:bold;">三角洲刚枪之王</p>
    <p style="text-align: center;">B.S. from Huazhong University of Science and Technology</p>
    <p style="text-align: center;">Email: jiangyj12023@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Focuses on medical robotics and acoustic sensors. She loves classical music and is interested in integrating acoustic sensors with soft robotic platforms for clinical applications.</p>
  `,
  jieyun: `
    <h2 style="text-align: center;">Jieyun Zou 邹介筠</h2>
    <img src="../src/images/people/jieyun.jpg" alt="Jieyun Zou" class="member-image">
    <p style="text-align: center;">B.S. from Tianjin University</p>
    <p style="text-align: center;">Email: zoujy2024@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Works on AI-driven acoustic imaging technologies. She enjoys playing the piano and is focused on integrating neural networks with inverse acoustic problem-solving for high-resolution imaging.</p>
  `,
  muxin: `
    <h2 style="text-align: center;">Xin Mu 慕欣</h2>
    <img src="../src/images/people/muxin.jpg" alt="Xin Mu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: muxin2024@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Researches robotic swarms and micro-scale actuation. She enjoys coding interactive games and is working on decentralized control strategies for cooperative micro-robot behaviors.</p>
  `,
    suhu: `
    <h2 style="text-align: center;">Prof. Dr. Hu Su 苏虎博士</h2>
    <img src="../src/images/people/sulaoshi.jpg" alt="Prof. Dr. Hu Su" class="member-image">
    <p style="text-align: center;">Visiting Professor From Institute of Automation, CAS</p>
    <p style="text-align: center;">Email: hu.su@ia.ac.cn</p>
    <p style="text-indent:2em;">Dr. Su has published dozens of papers in top-tier journals such as TASE, SMCA, Measurement, and PR, and conference proceedings including ICRA and IROS. He also serves as a reviewer for multiple international journals.</p>
  `,
    huaming: `
    <h2 style="text-align: center;">Huaming Li 李华敏</h2>
    <img src="../src/images/people/huaming.jpg" alt="Huaming Li" class="member-image">
    <p style="text-align: center;">B.S. from Central South University</p>
    <p style="text-align: center;">Email: lihm2025@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Researches robotic swarms and micro-scale actuation. She enjoys coding interactive games and is working on decentralized control strategies for cooperative micro-robot behaviors.</p>
  `,
    saida: `
    <h2 style="text-align: center;">Saida Yang 杨赛达</h2>
    <img src="../src/images/people/saida.jpg" alt="Saida Yang" class="member-image">
    <p style="text-align: center;">B.S. from Huazhong University of Science and Technology</p>
    <p style="text-align: center;">Currently Master Student in Institue of Automation, CAS</p>
    <p style="text-indent:2em;">Researches micro stuffs using acoustic sensing. She enjoys painting and is focused on developing novel soft robotic systems for medical applications.</p>
  `,
    ruitao: `
    <h2 style="text-align: center;">Ruitao Zong 宗锐涛</h2>
    <img src="../src/images/people/ruitao.jpg" alt="RuiTao Zong" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: zongrt2025@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">Zong is currently working on acoustic micro-assembling, interested in all kinds of balls</p>
  `,
    luojian: `
    <h2 style="text-align: center;">Jian Luo 罗剑</h2>
    <img src="../src/images/people/luojian.jpg" alt="Jian Luo" class="member-image">
    <p style="text-align: center;">M.Eng. Central Iron & Steel Research Institute</p>
    <p style="text-align: center;">Email: luojian2025@shanghaitech.edu.cn</p>
    <p style="text-indent:2em;">His research is dedicated to the fields of biomedical materials, sensors, and micro-nano robotics. Outside of the lab, he is an avid enthusiast of badminton and table tennis.</p>
  `
};


// 绑定点击事件
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    if (id == "laoban") return;
    document.getElementById('member-detail-text').innerHTML = memberDetails[id] || 'No detail available.';
    document.getElementById('member-overlay').style.display = 'flex';
  });
});
// 关闭罩子
function closeOverlay() {
  document.getElementById('member-overlay').style.display = 'none';
}
