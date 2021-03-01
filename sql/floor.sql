/*
Navicat MySQL Data Transfer

Source Server         : a
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : gree

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-12-16 19:17:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `floor`
-- ----------------------------
DROP TABLE IF EXISTS `floor`;
CREATE TABLE `floor` (
  `f_goods_id` varchar(255) DEFAULT NULL,
  `pic` varchar(1000) DEFAULT NULL,
  `f_id` varchar(255) DEFAULT NULL,
  `f_cart_id` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of floor
-- ----------------------------
INSERT INTO `floor` VALUES ('10', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/26/d0eee98b-46f5-4cc4-ae89-1fad3810e593.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('49', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/b5108bb9-e35a-4c93-908a-8ca1a552c0c7.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('17', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/6/19/286d9691-eeec-4d15-9530-e8558d687cd4.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('32', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/12/8dcf9c64-5b41-480f-a3ed-bbf50d034fc1.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('30', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/2/20/35f09791-4f83-4d79-a61a-3b228f9205c1.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('32', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/12/8dcf9c64-5b41-480f-a3ed-bbf50d034fc1.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('31', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/30/7c5b7b86-2367-4462-882c-a1e33acb7b66.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('48', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/30/49d8ac00-f033-41bd-8646-3ddd4fe76348.jpg', '1', '冰箱/洗衣机');
INSERT INTO `floor` VALUES ('64', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/ef82d675-28e9-454f-a06d-e1f61ccaf228.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('63', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/76cfaab4-a66d-4271-9f4f-1dd3c8054f92.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('65', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/29/2cbc7f1b-4c7a-4f5a-ad47-ac090d1735a1.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('66', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/8/7/1315b3f7-a748-44c5-9cef-b0fd458b7ce0.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('61', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/9/20/fb6a0b7a-94c7-48c7-a209-75424307e1f2jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('68', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/7/19/19e2a392-6497-4551-bc54-0ae13b70bcc7.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('72', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/1/23/c70e659e-7c70-46d7-a964-38b81019b9ef.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('69', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/8/7/58b2257d-f55d-4737-94e0-eede7ada64e0.jpg', '2', '空气能热水器');
INSERT INTO `floor` VALUES ('111', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/78677bbd-43a9-4f8c-9bda-1418cd1cea23.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('122', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/5c0dce44-a779-4d51-8fcc-8b28b550e1a3.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('191', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/12/23/0ef1e7ec-ed52-4505-a408-e93c48349b3e.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('127', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/1/23/c1009321-9a92-4e65-afbc-716675535027.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('131', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/5/71f172bf-7785-4b73-9a04-63a2b073f1dc.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('130', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/15/bd0bedad-4298-4197-87c2-2d49bfad8572.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('122', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/19/c85bbb51-090c-4f4c-82aa-fc408b811735.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('123', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/19/673a1bfc-f851-43c1-b1ae-c29e4ef8f4c2.jpg', '3', '厨房电器');
INSERT INTO `floor` VALUES ('263', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/27/3a31e27b-8331-49d5-a07d-da77bc16c526.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('307', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/27/7c1c3dc7-67bf-47ca-8f73-a0b9c0ca083a.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('150', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/10/31/1b64ae7f-2a29-4797-97ee-8fc7d5769fe4.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('151', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/10/31/2842d12a-2801-48e4-9e5d-e723285d193e.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('152', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/11/26/772ff633-1423-4cec-a4e4-da7fcea3e5be.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('153', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/11/26/8dc9f768-4eee-44e6-a805-ee7052c25fd8.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('154', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/10/31/1825146d-5d82-4204-b327-d14ac51e5ef1.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('155', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/11/26/53fc53fd-120a-4608-a2f5-79ee5a54a713.jpg', '4', '生活电器');
INSERT INTO `floor` VALUES ('600', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/3741c3cb-4eeb-4ff2-ba57-7392e619f7db.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('600', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/27/b92767d0-ed9d-4bf8-a846-f6fe28651375.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('594', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/13/78899886-a24e-408e-87f8-56355432bf36.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('595', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/5/13/ad669cdc-73c7-4f98-b2fc-e0d7d2aa5339.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('596', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/11/05fbf7b0-b8b0-4bc2-a7cd-f98915c94a29.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('597', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/27/3efbdd02-7a03-4cd5-a6db-d47ee0e9f208.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('600', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/6/21/3443423c-ccdc-4140-a5a8-5e543bc0ee96.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('605', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2019/3/21/887253dc-de70-4072-b889-d66859698071.jpg', '5', '格力手机');
INSERT INTO `floor` VALUES ('400', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/29/b587a7bf-a321-4595-a471-87c511855b90.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('395', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/9/29/67e14a64-af24-4ad7-a4f0-3c3a64afc714.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('396', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/2/3426bae4-ab87-4930-abbc-05d96a643d66.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('397', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/10/31/7ddf105f-f76e-4b4d-b316-a9be55cfb2b1.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('398', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/goods/2020/10/31/e05e48c3-2513-4f65-bb31-cc5e2dcd2144.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('399', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/2/222bffec-a364-41e8-8a20-8ca4a0f32c09.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('401', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/2/f86d7473-cce3-4599-aaae-f3981dc8b356.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('402', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/7/2/191c3f73-afa0-48ed-bf0f-8493a562e374.jpg', '6', '家用空调');
INSERT INTO `floor` VALUES ('715', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/30/80dcb07f-3d5b-45b2-a7d6-69b4ede8c7d3.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('714', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/30/c291b180-c892-47b8-aa23-8cbc2119c448.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('712', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/16/39569098-d9c3-45cf-ac5e-e3551ab8b843.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('713', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/26/b0dc3796-b367-497a-a1a9-95b26e377400.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('716', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/11/9267258d-6d31-47e6-a59c-3f93e466a678.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('717', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/11/e04c7163-d93c-40ed-933a-77281516bd90.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('718', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/16/f063bde2-96ae-430a-8fb1-11120aa4f0ac.jpg', '7', '新能源汽车');
INSERT INTO `floor` VALUES ('719', 'https://gelimall.oss-cn-shenzhen.aliyuncs.com/album/2020/11/16/3b954833-b612-42d1-be02-e7ef43b89901.jpg', '7', '新能源汽车');
