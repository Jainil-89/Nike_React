const Cloth = [
    {id:1,name:'Jordan MVP',cat:'t-shirt',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b15e0ed5-2a8a-438b-b83b-4bf5cda6a442/jordan-mvp-jumpman-t-shirt-5c24Ff.png'},
    {id:2,name:'Jordan Flight Essentials 85',cat:'t-shirt',mrp:'MRP : ₹ 2 595.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25c19e95-faba-48e7-97a0-f3e0f0428972/jordan-flight-essentials-85-t-shirt-9XTqRC.png'},
    {id:3,name:'Jordan Jumpman Flight',cat:'t-shirt',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fea1587-1d1d-4745-ba6e-0c297372cb19/jordan-jumpman-flight-t-shirt-zcd0M2.png'},
    {id:4,name:'Nike',cat:'t-shirt',mrp:'MRP : ₹ 1 795.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/673f60f8-1300-400b-996c-3cc0ded17711/dri-fit-sleeveless-fitness-t-shirt-84RgNh.png'},
    {id:5,name:'Air Jordan Wordmark 85',cat:'t-shirt',mrp:'MRP : ₹ 3 095.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4e30293a-cb55-4c1a-bf91-70f99121a0f6/air-jordan-wordmark-85-t-shirt-XRFc0n.png'},
    {id:6,name:'Nike Sportswear Club',cat:'t-shirt',mrp:'MRP : ₹ 1 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/176bca2a-22e7-419e-8d36-ccf076b57139/sportswear-club-t-shirt-K8nM0q.png'},
    {id:7,name:'Nike Rise 365 Run Division',cat:'t-shirt',mrp:'MRP : ₹ 3 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/364a54af-93e5-40bc-a2a3-ca9ffa1653d2/rise-365-run-division-dri-fit-short-sleeve-running-top-8g5pTq.png'},   
    {id:8,name:'Nike Sportswear',cat:'t-shirt',mrp:'MRP : ₹ 2 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3a30aee-7553-4e67-9736-ac5fa14d3281/sportswear-max90-t-shirt-trzSnl.png'},
    {id:9,name:'Nike Sportswear Windrunner',cat:'jkt',mrp:'MRP : ₹ 5 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b514af2c-e286-484f-8d9b-80878c46068f/sportswear-windrunner-hooded-jacket-VRVMZ4.png'},
    {id:10,name:'Jordan Essentials',cat:'t-shirt',mrp:'MRP : ₹ 5 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/708a77dc-8751-4129-bc84-cb3590beac9c/jordan-essentials-jacket-VXvJZZ.png'},
    {id:11,name:'Nike Windrunner',cat:'t-shirt',mrp:'MRP : ₹ 6 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/01be12c8-801c-4c09-abb8-8d2920aa1f6f/windrunner-repel-running-jacket-fw4NBt.png'},
    {id:12,name:'Nike Sportswear',cat:'t-shirt',mrp:'MRP : ₹ 4 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baffba0f-a0c6-4eee-9582-8874c1158080/sportswear-hooded-woven-jacket-BmPLqP.png'},
    {id:13,name:'Jordan Sport Jam',cat:'t-shirt',mrp:'MRP : ₹ 5 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14125f4a-60c1-42c2-b668-1f350ce0ee19/jordan-sport-jam-warm-up-jacket-JcFZsM.png'},
    {id:14,name:'Nike Culture of Football',cat:'t-shirt',mrp:'MRP : ₹ 14 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8f00b2e-19ce-48f2-9f24-2e4767f39029/culture-of-football-football-jacket-jX7MHn.png'},
    {id:15,name:'F.C. Barcelona Strike',cat:'t-shirt',mrp:'MRP : ₹ 8 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa00b369-8b42-4c68-94f6-95b85533c08c/fc-barcelona-strike-dri-fit-football-tracksuit-jacket-W1MRdr.png'},
    {id:16,name:'Nike Repel Unlimited',cat:'t-shirt',mrp:'MRP : ₹ 5 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3928524c-e91b-4b86-b6c2-b773da519a85/repel-unlimited-water-repellent-hooded-versatile-jacket-Nk4BDv.png'},
    {id:17,name:'Jordan Sport Hoop Fleece',cat:'t-shirt',mrp:'MRP : ₹ 5 695.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d7f4dae-b89c-4349-967d-feb0a343bd57/jordan-sport-hoop-fleece-dri-fit-hoodie-Z1DbBr.png'},
    {id:18,name:'Jordan Artist Series By Darien Birks',cat:'t-shirt',mrp:'MRP : ₹ 5 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a8b6c02c-5239-4558-ac1b-8898b12a7f93/jordan-artist-series-by-darien-birks-fleece-hoodie-Qg71Sc.png'},
    {id:19,name:'Jordan Flight MVP',cat:'t-shirt',mrp:'MRP : ₹ 4 095.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/56d2fff1-2ff9-4b50-8d88-4d6c52596c3c/jordan-flight-mvp-fleece-pullover-hoodie-d6CVJP.png'},
    {id:20,name:'JA',cat:'t-shirt',mrp:'MRP : ₹ 5 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3cf0dfc-2502-416b-b7bf-6032bdf34c2b/ja-dri-fit-pullover-basketball-hoodie-Cp748n.png'},
    {id:21,name:'Jordan Essentials',cat:'t-shirt',mrp:'MRP : ₹ 3 895.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21beb85d-b592-4e85-9a52-9f15288340ca/jordan-essentials-fleece-hoodie-QBT8br.png'},
    {id:22,name:'Dri-FIT Fleece Long-Sleeve',cat:'t-shirt',mrp:'MRP : ₹ 3 595.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0ee7de0-a7f6-433e-9dc5-d5a1526784ba/dri-fit-fleece-long-sleeve-fitness-crew-g2cPHl.png'},
    {id:23,name:'Nike Dri-FIT Standard Issue',cat:'t-shirt',mrp:'MRP : ₹ 5 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61c5e48d-904e-4a2e-b689-4f62ebef4d46/dri-fit-standard-issue-pullover-basketball-hoodie-RJnLjp.png'},
    {id:24,name:'Zion',cat:'t-shirt',mrp:'MRP : ₹ 3 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/943422d4-d7d3-4b8d-8d48-fb8543e636d4/zion-graphic-fleece-pullover-hoodie-b0HHG8.png'},
    {id:25,name:'Nike Club',mrp:'MRP : ₹ 1 595.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88b18a70-7c33-4d59-936f-557123ed7265/club-unstructured-flat-bill-outdoor-cap-4cwg3N.png'},
    {id:26,name:'Nike Apex',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2668e9b-a572-4cd7-8c36-01df6774b6b1/apex-bucket-hat-Qw5gdd.png'},
    {id:27,name:'Nike Heritage',mrp:'MRP : ₹ 1 395.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/40cb33ba-b1fe-4336-bfbf-9a680865a695/heritage-waistpack-Fnc8kw.png'},
    {id:28,name:'Nike Apex',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11cbd111-6efd-43ba-ab82-d4caaa6bf839/apex-reversible-bucket-hat-wpLGw1.png'},
    {id:29,name:'Nike Rise',mrp:'MRP : ₹ 1 695.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd953cf9-cc3e-4732-ad80-1fee5b8d3173/rise-structured-curved-bill-cap-rmkTbB.png'},
    {id:30,name:'Jordan Apex',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1fb52db1-9e36-4107-822a-f380c50a43ce/jordan-apex-bucket-hat-lxJ3Hs.png'},
    {id:31,name:'Nike Aura',mrp:'MRP : ₹ 1 895.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/146a66b9-5475-4d3e-9819-1c3acc5afa01/aura-cross-body-bag-KhhSpj.png'},
    {id:32,name:'Nike Club',mrp:'MRP : ₹ 1 195.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20c3cdb4-0e8b-4476-9a84-df0fec3f8f78/club-unstructured-swoosh-cap-c7lT9H.png'},
    {id:33,name:'Nike Aura',mrp:'MRP : ₹ 1 895.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78e110cc-2a9f-4e2e-9d17-4be1f5644148/aura-cross-body-bag-KhhSpj.png'},
    {id:34,name:'Nike Heritage',mrp:'MRP : ₹ 3 795.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ec3c3e1-51f8-4b54-8f61-656fd72e3f3c/heritage-winterized-eugene-backpack-j3gMBX.png'},
    {id:35,name:'Nike Hoops Elite',mrp:'MRP : ₹ 5 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2af2bbf9-84c2-41ef-a449-f552453ccf85/hoops-elite-backpack-Nw6wcq.png'},
    {id:36,name:'Nike Brasilia 9.5',mrp:'MRP : ₹ 2 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/33958efa-dbd2-42d3-8f69-a3f09512978e/brasilia-9-5-training-duffel-bag-Bpwcdd.png'},
    {id:37,name:'Nike Hike',mrp:'MRP : ₹ 6 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec1d2ed7-bc81-49be-852d-c62141933acc/hike-duffel-bag-KZkHPv.png'},
    {id:38,name:'Nike Utility Speed',mrp:'MRP : ₹ 4 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5765468e-9410-4192-b9bc-746ea32e0c00/utility-speed-training-backpack-mTh0wd.png'},
    {id:39,name:'Nike Shoe Box Bag',mrp:'MRP : ₹ 2 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b874379a-f5fd-4f62-9153-af9b222939d5/shoe-box-bag-M9GftZ.png'},
    {id:40,name:'Nike Hike',mrp:'MRP : ₹ 3 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21a80115-43a3-4296-8941-c7f6200ce586/hike-hip-pack-Bx8WrV.png'},
    {id:41,name:'Nike Everyday Plus Cushioned',mrp:'MRP : ₹ 1095.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a40fc9f3-5dda-43de-9c1d-84adb14efc98/everyday-plus-cushioned-training-ankle-socks-svtZ85.png'},
    {id:42,name:'Nike Everyday Plus Cushioned',mrp:'MRP : ₹ 495.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e19c9729-fdcf-40e6-b66f-004f9bf4d059/everyday-plus-cushioned-training-ankle-socks-h3Pq0p.png'},
    {id:43,name:'Nike Utility Power',mrp:'MRP : ₹ 3 795.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81189e14-81f5-4298-9357-179407bc4483/utility-power-training-duffel-bag-TJ6wFc.png'},
    {id:44,name:'Nike Sportswear RPM',mrp:'MRP : ₹ 5 795.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/476842a9-f75a-4ea0-96c3-109b64c67a40/sportswear-rpm-backpack-vGq1rL.png'},
    {id:45,name:'Nike Peak',mrp:'MRP : ₹ 1 595.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a532d2f5-344c-4d02-8667-e39e9d8a07ae/peak-tall-cuff-futura-beanie-X3mlw4.png'},
    {id:46,name:'Jordan Rise',mrp:'MRP : ₹ 1 995.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0ffb8d09-fea9-4b29-9555-539a8ee5769c/jordan-rise-structured-hat-7K3BGs.png'},
    {id:47,name:'Jordan Rise',mrp:'MRP : ₹ 1 695.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bd5e9aa-d515-4b84-98a0-91931e761efa/jordan-rise-structured-hat-v99s8M.png'},
    {id:48,name:'Nike Premium',mrp:'MRP : ₹ 2 295.00',img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17d90a44-1b35-498a-9212-aceef13e353c/cross-body-bag-Bdx1hX.png'},


]

export default Cloth