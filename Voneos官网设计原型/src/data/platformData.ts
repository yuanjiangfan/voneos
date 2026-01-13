// 导入平台logo图片
import wechatIcon from '../assets/other_logo/微信.png';
import xiaohongshuIcon from '../assets/other_logo/小红书.png';
import tmallIcon from '../assets/other_logo/天猫.png';
import jdIcon from '../assets/other_logo/京东.png';

// 导入二维码图片
import wechatQR from '../assets/二维码/微信二维码.png';

// 社交媒体平台数据接口
export interface Platform {
    platformName: string;
    icon: string;
    type: 'qr' | 'link';
    qrcode?: string;
    link?: string;
}

// 社交媒体平台数据
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
