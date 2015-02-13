/****************************************************************************
 Cocos2d-html5 show case : Moon Warriors

 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @Authors:
 Programmer: Shengxiang Chen (陈升想), Dingping Lv (吕定平), Ricardo Quesada
 Effects animation: Hao Wu (吴昊)
 Quality Assurance: Sean Lin (林顺)
 ****************************************************************************/

var res = {
    bgMusic_mp3 : 'res/Music/bgMusic.mp3',
    bgMusic_ogg : 'res/Music/bgMusic.ogg',
    buttonEffet_mp3 : 'res/Music/buttonEffet.mp3',
    buttonEffet_ogg : 'res/Music/buttonEffet.ogg',
    explodeEffect_mp3 : 'res/Music/explodeEffect.mp3',
    explodeEffect_ogg : 'res/Music/explodeEffect.ogg',
    fireEffect_mp3 : 'res/Music/fireEffect.mp3',         //unused
    fireEffect_ogg : 'res/Music/fireEffect.ogg',         //unused
    mainMainMusic_mp3 : 'res/Music/mainMainMusic.mp3',
    mainMainMusic_ogg : 'res/Music/mainMainMusic.ogg',
    shipDestroyEffect_mp3 : 'res/Music/shipDestroyEffect.mp3',
    shipDestroyEffect_ogg : 'res/Music/shipDestroyEffect.ogg',
    arial_14_fnt : 'res/arial-14.fnt',
    arial_14_png : 'res/arial-14.png',
    b01_plist : 'res/b01.plist',
    b01_png : 'res/b01.png',
    cocos2d_html5_png : 'res/cocos2d-html5.png',
    explode_plist : 'res/explode.plist',              //unused
    explosion_plist : 'res/explosion.plist',
    explosion_png : 'res/explosion.png',
    flare_jpg : 'res/flare.jpg',
    gameOver_png : 'res/gameOver.png',
    gameOverBack_png : 'res/gameoverBack.png',
    level01_tmx : 'res/level01.tmx',
    loading_png : 'res/loading.png',
    logo_png : 'res/logo.png',
    logoBack_png : 'res/logoBack.png',
    menu_png : 'res/menu.png',
    menuTitle_png : 'res/menuTitle.png',
    textureOpaquePack_plist : 'res/textureOpaquePack.plist',
    textureOpaquePack_png : 'res/textureOpaquePack.png',
    textureTransparentPack_plist : 'res/textureTransparentPack.plist',
    textureTransparentPack_png : 'res/textureTransparentPack.png',
    shipE0:"res/E0.png",
    shipE1:"res/E1.png",
    shipE2:"res/E2.png",
    shipE3:"res/E3.png",
    shipE4:"res/E4.png",
    shipE5:"res/E5.png",
    ship01:"res/ship01.png",
    ship02:"res/ship02.png",
    ship03:"res/ship03.png",
    W1:"res/W1.png",
    W2:"res/W2.png",
    lvl1_map1:"res/lvl1_map1.png",
    lvl1_map2:"res/lvl1_map2.png",
    lvl1_map3:"res/lvl1_map3.png",
    lvl1_map4:"res/lvl1_map4.png",
    explode1:"res/explode1.png",
    explode2:"res/explode2.png",
    explode3:"res/explode3.png",
    hit:"res/hit.png",
    bg01:"res/bg01.png",
    overBg:"res/overBg.png",
    enemys_plist:"res/enemys.plist",
    enemys_png:"res/enemys.png"

};

var g_mainmenu = [
    res.loading_png,
    res.flare_jpg,
    res.menu_png,
    res.logo_png,
    res.logoBack_png,
    res.b01_png,
    res.b01_plist,
    //res.mainMainMusic_mp3,
    //res.mainMainMusic_ogg,
    res.menuTitle_png,
    //res.textureTransparentPack_plist,
    //res.textureTransparentPack_png
];

var g_maingame = [
    //image
    res.cocos2d_html5_png,
    res.gameOver_png,
    res.gameOverBack_png,
    res.arial_14_png,
    res.explosion_png,
    //res.textureOpaquePack_png,

    //tmx
    //res.level01_tmx,

    //plist
    res.explosion_plist,
    //res.textureOpaquePack_plist,

    //music
    //res.bgMusic_mp3,
    //res.bgMusic_ogg,
    //
    ////effect
    //res.buttonEffet_mp3,
    //res.explodeEffect_mp3,
    //res.fireEffect_mp3,
    //res.shipDestroyEffect_mp3,
    //res.buttonEffet_ogg,
    //res.explodeEffect_ogg,
    //res.fireEffect_ogg,
    //res.shipDestroyEffect_ogg,

    // FNT
    res.arial_14_fnt,

    res.shipE0,
    res.shipE1,
    res.shipE2,
    res.shipE3,
    res.shipE4,
    res.shipE5,
    res.ship01,
    res.ship02,
    res.ship03,
    res.W1,
    res.W2,
    res.lvl1_map1,
    res.lvl1_map2,
    res.lvl1_map3,
    res.lvl1_map4,
    res.explode1,
    res.explode2,
    res.explode3,
    res.hit,
    res.bg01,
    res.overBg,
    res.enemys_plist,
    res.enemys_png
];
