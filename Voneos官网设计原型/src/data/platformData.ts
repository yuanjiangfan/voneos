// 临时保留旧的导出供Footer使用
import wechatIcon from '../assets/other_logo/微信.png';
import xiaohongshuIcon from '../assets/other_logo/小红书.png';
import tmallIcon from '../assets/other_logo/天猫.png';
import jdIcon from '../assets/other_logo/京东.png';
import wechatQR from '../assets/二维码/微信二维码.png';

export interface Platform {
    platformName: string;
    icon: string;
    type: 'qr' | 'link';
    qrcode?: string;
    link?: string;
}

export const platforms: Platform[] = [
    {
        platformName: '微信',
        icon: wechatIcon,
        type: 'qr',
        qrcode: wechatQR
    },
    {
        platformName: '小红书',
        icon: xiaohongshuIcon,
        type: 'qr',
        qrcode: wechatQR
    },
    {
        platformName: '天猫',
        icon: tmallIcon,
        type: 'link',
        link: 'https://www.baidu.com'
    },
    {
        platformName: '京东',
        icon: jdIcon,
        type: 'link',
        link: 'https://www.baidu.com'
    }
];

// 注意: 此文件保留是为了兼容性,实际应使用 src/services/platformService.ts
