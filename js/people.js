// 成员详情信息
const memberDetails = {
  yuyu: `
    <h2 style="text-align: center;">Yuyu Jia 贾羽宇</h2>
    <img src="../src/images/people/shijie.jpg" alt="Yuyu Jia" class="member-image">
    <p style="text-align: center;">B.S. from Nantong University</p>
    <p style="text-align: center;">Email: jiayy1@shanghaitech.edu.cn</p>
    <p>Research interests include acoustic manipulation, biomedical robotics, and intelligent sensing. She enjoys painting and exploring novel biomedical applications of acoustic fields.</p>
  `,
  chengxi: `
    <h2 style="text-align: center;">Chengxi Zhong 钟承希</h2>
    <img src="../src/images/people/chengxi.jpg" alt="Chengxi Zhong" class="member-image">
    <p style="text-align: center;">B.S. from Tianjin University of Technology</p>
    <p style="text-align: center;">Email: zhongchx@shanghaitech.edu.cn</p>
    <p>Focused on real-time acoustic holography and AI-enhanced field reconstruction techniques. He enjoys coding and is passionate about combining deep learning with physical field control.</p>
  `,
  jiaqi: `
    <h2 style="text-align: center;">Jiaqi Li 李家齐</h2>
    <img src="../src/images/people/jiaqi.jpg" alt="Jiaqi Li" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: lijq1@shanghaitech.edu.cn</p>
    <p>Interested in microrobotics and intelligent control. He likes playing chess and is keen on developing adaptive control strategies for tiny autonomous systems.</p>
  `,
  yuting: `
    <h2 style="text-align: center;">Yuting Yang 杨宇婷</h2>
    <img src="../src/images/people/yuting.jpg" alt="Yuting Yang" class="member-image">
    <p style="text-align: center;">B.S. from Jilin University</p>
    <p style="text-align: center;">Email: yangyt1@shanghaitech.edu.cn</p>
    <p>Focus on ultrasound imaging and smart actuation. She enjoys photography and is devoted to enhancing image-guided robotic intervention techniques.</p>
  `,
  mingyue: `
    <h2 style="text-align: center;">Mingyue Wang 王铭悦</h2>
    <img src="../src/images/people/mingyue.jpg" alt="Mingyue Wang" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: wangmy1@shanghaitech.edu.cn</p>
    <p>Researches MEMS-based sensors and acoustic devices. She enjoys baking and focuses on integrating acoustic devices with flexible microsystems for health monitoring.</p>
  `,
  zhenhuan: `
    <h2 style="text-align: center;">Zhenhuan Sun 孙震寰</h2>
    <img src="../src/images/people/zhenhuan.jpg" alt="Zhenhuan Sun" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: sunzhh2022@shanghaitech.edu.cn</p>
    <p>Interests in robotic automation and intelligent systems. He enjoys basketball and aims to develop high-precision automation platforms using intelligent feedback control.</p>
  `,
  fuxiang: `
    <h2 style="text-align: center;">Xiang Fu 符翔</h2>
    <img src="../src/images/people/fuxiang.jpg" alt="Xiang Fu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: fuxiang2022@shanghaitech.edu.cn</p>
    <p>Works on real-time control algorithms and embedded systems. He enjoys drone racing and is interested in developing latency-sensitive control architectures for real-world microrobotics.</p>
  `,
  liuqing: `
    <h2 style="text-align: center;">Qing Liu 刘晴</h2>
    <img src="../src/images/people/liuqing.jpg" alt="Qing Liu" class="member-image">
    <p style="text-align: center;">B.S. from Central South University</p>
    <p style="text-align: center;">Email: liuqing2022@shanghaitech.edu.cn</p>
    <p>Research interests include acoustic field modeling and system integration. She enjoys calligraphy and focuses on multi-physics simulation and optimization of acoustic manipulation systems.</p>
  `,
  siyuan: `
    <h2 style="text-align: center;">Siyuan An 安思远</h2>
    <img src="../src/images/people/siyuan.jpg" alt="Siyuan An" class="member-image">
    <p style="text-align: center;">B.S. from Shandong University</p>
    <p style="text-align: center;">Email: ansy2022@shanghaitech.edu.cn</p>
    <p>Focus on acoustic levitation and robotic manipulation. He enjoys watching science fiction and is exploring levitated multi-agent microrobot systems for complex task execution.</p>
  `,
  qingyi: `
    <h2 style="text-align: center;">Qingyi Lu 陆清怡</h2>
    <img src="../src/images/people/qingyi.jpg" alt="Qingyi Lu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: luqy2023@shanghaitech.edu.cn</p>
    <p>Interested in bio-acoustic systems and signal processing. She enjoys hiking and is dedicated to improving signal acquisition methods in biological environments using acoustic sensing.</p>
  `,
  yujie: `
    <h2 style="text-align: center;">Yujie Jiang 姜昱婕</h2>
    <img src="../src/images/people/yujie.jpg" alt="Yujie Jiang" class="member-image">
    <p style="text-align: center;">B.S. from Huazhong University of Science and Technology</p>
    <p style="text-align: center;">Email: jiangyj12023@shanghaitech.edu.cn</p>
    <p>Focuses on medical robotics and acoustic sensors. She loves classical music and is interested in integrating acoustic sensors with soft robotic platforms for clinical applications.</p>
  `,
  jieyun: `
    <h2 style="text-align: center;">Jieyun Zou 邹介筠</h2>
    <img src="../src/images/people/jieyun.jpg" alt="Jieyun Zou" class="member-image">
    <p style="text-align: center;">B.S. from Tianjin University</p>
    <p style="text-align: center;">Email: zoujy2024@shanghaitech.edu.cn</p>
    <p>Works on AI-driven acoustic imaging technologies. He enjoys playing the piano and is focused on integrating neural networks with inverse acoustic problem-solving for high-resolution imaging.</p>
  `,
  muxin: `
    <h2 style="text-align: center;">Xin Mu 慕欣</h2>
    <img src="../src/images/people/muxin.jpg" alt="Xin Mu" class="member-image">
    <p style="text-align: center;">B.S. from ShanghaiTech University</p>
    <p style="text-align: center;">Email: muxin2024@shanghaitech.edu.cn</p>
    <p>Researches robotic swarms and micro-scale actuation. She enjoys coding interactive games and is working on decentralized control strategies for cooperative micro-robot behaviors.</p>
  `
};


// 绑定点击事件
document.querySelectorAll('.member-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    document.getElementById('member-detail-text').innerHTML = memberDetails[id] || 'No detail available.';
    document.getElementById('member-overlay').style.display = 'flex';
  });
});
// 关闭罩子
function closeOverlay() {
  document.getElementById('member-overlay').style.display = 'none';
}
