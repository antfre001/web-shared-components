import React from 'react';
import { Meta } from '@storybook/react';
import { UserMenu } from '../src';
import { cx } from '@sk-web-gui/utils';
import { Link } from '../../react';
import { MenuItemGroup } from '../src/user-menu';

export default {
  title: 'WIP/Komponenter/UserMenu',
  component: UserMenu,
  argTypes: {
    menuTitle: { control: 'text', defaultValue: 'Menytext' },
  },
  parameters: { controls: { hideNoControlsWarning: true } },
} as Meta;

const isMobileMenuOpen = false;

const menuGroups: MenuItemGroup[] = [
  {
    label: 'Main',
    showLabel: false,
    showOnDesktop: false,
    showOnMobile: true,
    elements: [
      {
        label: 'Pågående',
        element: (active: boolean) => (
          <Link href="/pagaende" className={`usermenu-item ${active ? 'active' : ''}`}>
            Pågående
          </Link>
        ),
      },
      {
        label: 'Beslutade',
        element: (active: boolean) => (
          <Link href="/beslutade" className={`usermenu-item ${active ? 'active' : ''}`}>
            Beslutade
          </Link>
        ),
      },
      {
        label: 'Handlingsplan',
        element: (active: boolean) => (
          <Link href="/handlingsplan" className={`usermenu-item ${active ? 'active' : ''}`}>
            Handlingsplan
          </Link>
        ),
      },
      {
        label: 'Företagsuppgifter',
        element: (active: boolean) => (
          <Link href="/foretagsuppgifter" className={`usermenu-item ${active ? 'active' : ''}`}>
            Företagsuppgifter
          </Link>
        ),
      },
    ],
  },
  {
    label: 'Relaterade webbplatser',
    showLabel: true,
    showOnDesktop: true,
    showOnMobile: true,
    elements: [
      {
        label: 'E-tjänster',
        element: (active: boolean) => (
          <a href="https://www.sundsvall.se/" className={`usermenu-item ${active ? 'active' : ''}`}>
            E-tjänster
          </a>
        ),
      },

      {
        label: 'Företagscenter Sundsvall',
        element: (active: boolean) => (
          <a href="https://www.sundsvall.se/" className={`usermenu-item ${active ? 'active' : ''}`}>
            Företagscenter Sundsvall
          </a>
        ),
      },
    ],
  },
  {
    label: 'Inställningar',
    showLabel: true,
    showOnDesktop: true,
    showOnMobile: true,
    elements: [
      {
        label: 'Mina uppgifter',
        element: (active: boolean) => (
          <Link href="/myaccount" className={`usermenu-item ${active ? 'active' : ''}`}>
            <span className="material-icons-outlined align-middle mr-sm" aria-hidden="true">
              account_circle
            </span>

            <span className="inline" aria-hidden="true">
              Mina uppgifter
            </span>
          </Link>
        ),
      },
      {
        label: 'Inställningar som har en riktigt lång text',
        element: (active: boolean) => (
          <Link href="/myaccount" className={`usermenu-item ${active ? 'active' : ''}`}>
            <span className="material-icons-outlined align-middle mr-sm" aria-hidden="true">
              settings
            </span>

            <span className="inline" aria-hidden="true">
              Inställningar som har en riktigt lång text
            </span>
          </Link>
        ),
      },
      {
        label: 'Meddelanden',
        element: (active: boolean) => (
          <Link href="/messages" className={`usermenu-item ${active ? 'active' : ''}`}>
            <span className="material-icons-outlined align-middle mr-sm" aria-hidden="true">
              email
            </span>

            <span className="inline" aria-hidden="true">
              Meddelanden
            </span>
          </Link>
        ),
      },
      {
        label: 'Logga ut',
        element: (active: boolean) => (
          <Link href="/logout" className={`usermenu-item ${active ? 'active' : ''}`}>
            <span className="material-icons-outlined align-middle mr-sm" aria-hidden="true">
              logout
            </span>

            <span className="inline" aria-hidden="true">
              Logga ut
            </span>
          </Link>
        ),
      },
    ],
  },
];

export const Basic = () => (
  <nav
    className={cx('lg:border-t-8 lg:border-primary lg:static lg:w-auto lg:h-auto lg:min-h-0', {
      'fixed z-50 top-0 left-0 w-full min-h-screen bg-white ': isMobileMenuOpen,
    })}
  >
    <div className="shadow-lg mx-auto px-7 pt-[22px] pb-[8px]">
      <div
        className="container m-auto flex items-center justify-between"
        style={{ maxWidth: '120rem', paddingLeft: '0', paddingRight: '0' }}
      >
        <div className="flex items-center shrink-0 text-black mr-6">
          <Link href={'/'}>
            <a className="flex items-center">
              <svg
                className="lg:hidden"
                width="16"
                height="30"
                viewBox="0 0 16 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1263 6.89381C10.4032 7.0461 10.6322 7.27329 10.7875 7.54971L8.40114 7.16213C8.86576 6.82334 9.56739 6.54553 10.1236 6.8911L10.1263 6.89381ZM3.25808 3.21045C3.25808 3.21045 2.60223 4.37725 3.76848 4.70792C5.24985 5.07923 6.82819 5.31639 8.31091 5.91538C8.72704 6.07122 8.2732 6.45744 7.99713 6.45744C5.43839 5.74733 2.99143 4.86376 0.0515747 4.98437C0.706073 5.78121 1.68109 6.87213 1.89521 7.95762C2.91871 7.13232 4.50782 6.67698 5.76025 7.34644L4.27888 7.86005C1.94639 8.7382 0.362663 11.2304 0.11891 13.6114C-0.100603 16.273 1.32152 18.5903 3.62842 19.8073C6.41879 21.2885 10.8858 20.6583 12.1531 23.6451C12.4561 24.3606 12.4332 25.7727 11.8406 26.6265C10.7781 27.9817 9.28189 28.3882 7.50289 28.1836C7.50289 28.1836 5.42089 27.8976 4.18192 26.9477C2.41369 25.5925 1.89252 23.782 1.66358 21.7601L0.586216 21.7479C0.839397 24.3064 0.598337 26.8826 0.23742 29.3029L1.13971 29.3978C1.27392 29.0422 1.43932 28.6994 1.63395 28.3733C1.73896 28.2648 1.87863 28.197 2.02839 28.1819C2.17815 28.1668 2.32841 28.2053 2.45275 28.2906C5.58384 30.4589 10.6582 30.4386 13.5954 28.4465C15.6154 26.9477 16.3386 24.6791 15.7501 22.3211C14.4128 17.5888 9.01659 18.1133 5.4963 16.4817C4.33409 16.0128 3.14899 14.8663 3.14091 13.4894C3.12475 12.0543 3.69845 10.9011 4.87143 10.0893C5.17179 9.90067 5.51153 9.7847 5.86395 9.75051C4.91048 10.7452 4.32332 11.8822 4.4957 13.3322C4.6196 14.5004 5.62962 15.636 6.73931 15.9667C7.83553 16.2689 8.81189 15.8312 9.6253 15.1983L9.53103 14.6983C9.01898 14.8265 8.48395 14.8302 7.9702 14.7091C6.99114 14.3581 6.63157 13.3892 6.71237 12.4053C6.79048 11.9838 7.12716 11.6871 7.61197 11.8144C10.0172 12.8119 9.57681 16.0385 11.8527 17.1714C12.1773 17.2832 12.5241 17.3136 12.8629 17.26C13.2018 17.2064 13.5225 17.0704 13.7974 16.8638C14.9852 16.0168 15.4134 14.9069 15.742 13.564C15.0996 14.2903 14.5192 15.0696 13.5752 15.2471C13.1052 15.3542 12.8601 15.2471 12.5827 14.8405C11.6534 13.3499 11.3585 10.8631 9.17146 10.6395C8.73048 10.6184 8.28855 10.6484 7.85438 10.7289C8.40922 10.2736 9.07988 9.82369 9.82461 9.81014C10.9208 9.7722 12.0386 10.523 12.4695 11.2805C12.6917 11.6871 12.619 12.3755 12.3214 12.7712L12.8224 13.1384C13.6492 12.0692 15.408 10.6991 15.3905 9.79795C15.2478 8.03622 12.6096 6.97648 11.0501 6.35039C11.0501 6.35039 11.3194 5.65112 11.1848 5.14157C10.8804 4.43959 10.2421 4.32847 9.61452 4.15636C8.47656 3.83247 6.64235 3.68341 5.80874 2.93671C4.97513 2.19001 5.35355 1.38774 5.5569 0.535339C3.36985 2.89876 3.25404 3.21045 3.25404 3.21045H3.25808Z"
                  fill="#212121"
                />
              </svg>

              <span className="text-xl tracking-tight hidden lg:inline-block">Mina sidor</span>
              <svg
                className="mx-4"
                width="1"
                height="40"
                viewBox="0 0 1 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="1" height="40" fill="#212121" />
              </svg>
              <svg
                className="hidden lg:block"
                width="95"
                height="38"
                viewBox="0 0 95 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.3976 4.09611C4.3976 4.09611 3.56184 5.56657 5.04387 5.9791C6.93194 6.44152 8.95535 6.73761 10.8502 7.48615C11.3814 7.6791 10.7994 8.17147 10.4475 8.15151C7.17894 7.26658 4.05585 6.15542 0.296631 6.31511C1.13239 7.31315 2.37757 8.6705 2.66517 10.0278C3.97464 8.99653 6.00482 8.42764 7.60528 9.26267L5.7206 9.91473C2.72608 11.0093 0.702667 14.1232 0.391373 17.094C0.110531 20.4208 1.93093 23.3085 4.87807 24.8289C8.44442 26.6786 14.1492 25.8935 15.77 29.6195C16.1591 30.5144 16.1287 32.281 15.3707 33.3389C14.0173 35.0356 12.0954 35.5379 9.82833 35.2851C9.82833 35.2851 7.16879 34.9258 5.58525 33.7415C3.32498 32.0414 2.67533 29.7892 2.36741 27.2641H1.01396C1.32187 30.4446 1.01396 33.6616 0.550403 36.699L1.70422 36.8154C1.87471 36.3661 2.0865 35.9329 2.33696 35.5213C2.47181 35.386 2.6507 35.3016 2.8424 35.2827C3.03411 35.2639 3.22646 35.3118 3.38589 35.4182C7.38534 38.1196 13.8752 38.0996 17.6242 35.6111C20.2059 33.7415 21.1297 30.907 20.3751 27.9594C18.663 22.061 11.7638 22.7263 7.2703 20.6737C5.77812 20.0915 4.26563 18.6776 4.2521 16.941C4.21641 16.1057 4.40151 15.2756 4.78934 14.5316C5.17717 13.7877 5.75449 13.1552 6.465 12.696C6.85488 12.4604 7.29499 12.3169 7.75078 12.2768C6.53267 13.5177 5.7815 14.9382 5.99467 16.7447C6.1537 18.2052 7.44287 19.6158 8.86061 20.0349C10.2784 20.4541 11.5066 19.8619 12.5488 19.0735L12.427 18.4514C11.7722 18.6077 11.0888 18.6077 10.434 18.4514C9.18205 18.0122 8.72188 16.8046 8.82677 15.5703C8.84064 15.4422 8.88336 15.3186 8.95184 15.2087C9.02031 15.0988 9.11282 15.0052 9.22265 14.9348C9.33248 14.8644 9.45688 14.8189 9.58681 14.8017C9.71674 14.7844 9.84894 14.7959 9.97382 14.8351C13.0326 16.096 12.4879 20.1248 15.3876 21.5387C15.8022 21.6771 16.2448 21.7147 16.6773 21.648C17.1099 21.5814 17.5196 21.4126 17.8712 21.1561C19.3905 20.0981 19.9319 18.7109 20.3548 17.0341C19.536 17.9424 18.7916 18.9138 17.587 19.1367C16.9847 19.2698 16.6734 19.1367 16.3181 18.6244C15.1305 16.7647 14.7549 13.6574 11.96 13.378C11.3935 13.3532 10.8261 13.3912 10.2682 13.4911C10.9788 12.9222 11.8348 12.3599 12.789 12.3433C13.4635 12.3503 14.1257 12.5218 14.7162 12.8423C15.3067 13.1628 15.8071 13.6223 16.1726 14.1797C16.3053 14.48 16.3573 14.8087 16.3235 15.1344C16.2897 15.46 16.1713 15.7717 15.9798 16.0394L16.6193 16.5118C17.6784 15.1811 19.9251 13.4678 19.9048 12.34C19.7221 10.1443 16.352 8.81688 14.359 8.03507C14.5469 7.55553 14.6052 7.03631 14.5282 6.52802C14.1391 5.64974 13.3202 5.52997 12.5217 5.2971C11.0667 4.89455 8.72188 4.70825 7.65603 3.78006C6.59019 2.85188 7.07405 1.83387 7.34136 0.769287C4.54648 3.72018 4.3976 4.09611 4.3976 4.09611ZM13.1646 8.70709C13.5192 8.89774 13.8123 9.18245 14.0105 9.52882L10.9652 9.0431C11.5709 8.6206 12.4879 8.27128 13.1646 8.70709Z"
                  fill="#212121"
                />
                <path
                  d="M30.5023 15.0314C30.4122 14.954 30.3135 14.8871 30.2079 14.8318C30.0129 14.718 29.8106 14.6169 29.6022 14.529C29.3466 14.4173 29.0832 14.3239 28.8139 14.2496C28.5328 14.1734 28.2426 14.1342 27.951 14.1331C27.649 14.1144 27.348 14.1826 27.0848 14.3294C26.9879 14.3928 26.9093 14.4797 26.8566 14.5817C26.8038 14.6837 26.7787 14.7973 26.7837 14.9116C26.7781 15.0554 26.8262 15.1962 26.919 15.3075C27.0259 15.4268 27.1559 15.5241 27.3014 15.5936C27.4993 15.6899 27.7068 15.7657 27.9206 15.8198C28.1642 15.893 28.4484 15.9729 28.7699 16.0594C29.1905 16.1705 29.604 16.3061 30.0083 16.4652C30.3497 16.5931 30.6674 16.7752 30.9489 17.0042C31.2058 17.2185 31.4105 17.4868 31.5478 17.7893C31.6941 18.1417 31.7643 18.52 31.7542 18.9005C31.7668 19.3617 31.6634 19.8188 31.4531 20.2312C31.2608 20.5844 30.9859 20.8877 30.6512 21.1161C30.303 21.3478 29.914 21.5136 29.5041 21.6052C29.0605 21.7077 28.6063 21.7591 28.1507 21.7582C27.7939 21.7559 27.4378 21.7293 27.0848 21.6784C26.7234 21.6248 26.3662 21.547 26.0156 21.4455C25.6701 21.3448 25.3311 21.2237 25.0005 21.0829C24.6819 20.9468 24.3761 20.7831 24.0869 20.5938L25.0614 18.7341C25.1774 18.8252 25.2995 18.9086 25.4268 18.9836C25.6585 19.1243 25.9005 19.2478 26.1509 19.3529C26.4658 19.4845 26.789 19.5956 27.1187 19.6856C27.474 19.7795 27.8402 19.8276 28.2082 19.8287C28.9864 19.8287 29.3789 19.5925 29.3789 19.1267C29.3809 19.0462 29.3664 18.966 29.3361 18.8912C29.3059 18.8163 29.2606 18.7482 29.203 18.6909C29.0651 18.5565 28.9049 18.4463 28.7293 18.3649C28.4937 18.2645 28.2518 18.1789 28.0052 18.1087C27.7243 18.0288 27.4198 17.9423 27.0916 17.8425C26.6957 17.7267 26.3098 17.5798 25.9378 17.4034C25.6426 17.2671 25.3709 17.0864 25.1325 16.8678C24.9284 16.6744 24.7702 16.4393 24.6689 16.1791C24.5617 15.8824 24.5101 15.5691 24.5166 15.2543C24.5082 14.8032 24.6042 14.3561 24.7975 13.9468C24.9799 13.5765 25.242 13.2496 25.5656 12.9887C25.8934 12.7288 26.2691 12.5334 26.672 12.4132C27.1098 12.2776 27.5665 12.2103 28.0255 12.2136C28.3603 12.2131 28.6945 12.2432 29.0236 12.3034C29.3342 12.3639 29.6405 12.4439 29.9406 12.5429C30.223 12.6356 30.4989 12.7467 30.7662 12.8756C31.0279 12.9976 31.2614 13.1207 31.4666 13.2449L30.5023 15.0314Z"
                  fill="#212121"
                />
                <path
                  d="M34.7926 21.7915C34.4855 21.8115 34.1778 21.762 33.8933 21.6466C33.6088 21.5312 33.355 21.3532 33.1515 21.1261C32.7353 20.5571 32.5353 19.8624 32.5865 19.1633V14.7419H34.7384V18.7009C34.7162 19.0429 34.805 19.3831 34.9922 19.6723C35.0755 19.7824 35.1852 19.8704 35.3116 19.9284C35.438 19.9865 35.577 20.0128 35.7163 20.005C36.0092 20.003 36.2964 19.925 36.5487 19.7788C36.8559 19.5898 37.1032 19.3202 37.2626 19.0003V14.7419H39.4112V19.2997C39.3927 19.4571 39.4363 19.6155 39.533 19.7422C39.6539 19.8406 39.8058 19.8947 39.9628 19.8952V21.6618C39.7693 21.7009 39.5739 21.7297 39.3774 21.7482C39.2082 21.7482 39.0661 21.7682 38.9409 21.7682C38.1897 21.7682 37.7555 21.4732 37.6382 20.8833L37.5976 20.4608C37.2957 20.8949 36.8793 21.2399 36.393 21.4588C35.8906 21.6831 35.3444 21.7967 34.7926 21.7915Z"
                  fill="#212121"
                />
                <path
                  d="M47.8232 21.6618H45.6746V17.7661C45.7036 17.4136 45.6106 17.0619 45.4106 16.768C45.327 16.6675 45.2209 16.5873 45.1006 16.5336C44.9803 16.48 44.849 16.4543 44.717 16.4586C44.5582 16.4601 44.401 16.4905 44.2534 16.5484C44.0938 16.6116 43.9454 16.6992 43.8136 16.8079C43.6693 16.9204 43.5397 17.0501 43.4278 17.1938C43.3133 17.3433 43.2231 17.5094 43.1605 17.6862V21.6618H41.0085V14.742H42.9406V15.903C43.2061 15.4862 43.5894 15.1544 44.0437 14.9482C44.5572 14.7178 45.117 14.6041 45.6813 14.6155C46.0656 14.5978 46.4477 14.6817 46.7878 14.8584C47.0596 15.0087 47.2851 15.2282 47.4408 15.4938C47.5946 15.757 47.6978 16.0457 47.7454 16.3455C47.7929 16.6416 47.8178 16.9407 47.8198 17.2404L47.8232 21.6618Z"
                  fill="#212121"
                />
                <path
                  d="M52.0254 21.7915C51.5654 21.7961 51.1098 21.7043 50.6888 21.522C50.2865 21.3451 49.9268 21.0866 49.6331 20.7635C49.3378 20.4263 49.1084 20.0383 48.9564 19.6191C48.786 19.161 48.7011 18.6763 48.706 18.1886C48.7032 17.7069 48.7809 17.2282 48.9361 16.7713C49.0766 16.3544 49.2959 15.9673 49.5824 15.6302C49.8556 15.3137 50.1918 15.0556 50.5704 14.8717C50.961 14.684 51.391 14.5894 51.8257 14.5956C52.2902 14.5875 52.7484 14.7024 53.1521 14.9283C53.5441 15.1439 53.8656 15.4647 54.0792 15.8531V12.0206H56.2278V19.2831C56.2061 19.4413 56.2459 19.6017 56.3395 19.7322C56.4604 19.8307 56.6123 19.8848 56.7692 19.8852V21.6618C56.5759 21.7011 56.3804 21.73 56.1839 21.7483C56.0181 21.7483 55.8692 21.7682 55.7338 21.7682C54.9827 21.7483 54.5496 21.4555 54.4447 20.8833L54.4041 20.5107C54.1671 20.9216 53.8147 21.2566 53.389 21.4755C52.9673 21.6882 52.4993 21.7967 52.0254 21.7915ZM52.6006 20.0117C52.9035 20.0092 53.1989 19.9189 53.4499 19.7522C53.7221 19.5766 53.9408 19.3317 54.0826 19.0436V17.5931C53.9529 17.2524 53.7262 16.9556 53.4296 16.7381C53.1651 16.5272 52.8362 16.41 52.4957 16.4054C52.2728 16.4023 52.0527 16.455 51.8562 16.5584C51.6648 16.6587 51.4948 16.7942 51.3554 16.9576C51.2061 17.1289 51.0913 17.3264 51.017 17.5398C50.9417 17.7652 50.904 18.0012 50.9054 18.2385C50.8869 18.7097 51.0542 19.1697 51.3723 19.5226C51.5295 19.6858 51.7205 19.8139 51.9324 19.8983C52.1443 19.9827 52.3722 20.0213 52.6006 20.0117Z"
                  fill="#212121"
                />
                <path
                  d="M60.7723 21.7915C60.4666 21.7923 60.1612 21.7712 59.8587 21.7283C59.5406 21.6851 59.2259 21.6252 58.9146 21.552C58.6088 21.4795 58.3081 21.3872 58.0146 21.2759C57.7527 21.1781 57.5011 21.0556 57.2634 20.9099L58.106 19.486C58.5347 19.7331 58.9883 19.936 59.4594 20.0915C59.8656 20.2291 60.2919 20.301 60.7215 20.3044C60.9696 20.3196 61.2173 20.269 61.4388 20.158C61.5165 20.117 61.5808 20.0553 61.6245 19.98C61.6681 19.9047 61.6894 19.8188 61.6858 19.7322C61.6812 19.6352 61.6462 19.5419 61.5856 19.4651C61.5251 19.3883 61.4419 19.3317 61.3475 19.3031C60.9733 19.1552 60.5889 19.034 60.197 18.9404C59.7877 18.8384 59.3844 18.714 58.9891 18.5678C58.7024 18.4704 58.4321 18.3313 58.1872 18.1553C58.0012 18.0189 57.8524 17.8395 57.7541 17.633C57.6572 17.4162 57.6098 17.1811 57.6153 16.9443C57.6117 16.61 57.6882 16.2794 57.8386 15.9796C57.9854 15.6913 58.1958 15.439 58.4545 15.241C58.7285 15.0313 59.0376 14.8703 59.3681 14.7653C59.7445 14.6488 60.1374 14.5916 60.532 14.5956C61.044 14.5973 61.5532 14.6701 62.0445 14.8118C62.5666 14.9601 63.0722 15.1596 63.5536 15.4073L62.7077 16.7381C62.3326 16.5283 61.9384 16.3534 61.5302 16.2158C61.2029 16.1077 60.8603 16.0516 60.5151 16.0494C60.281 16.0376 60.0478 16.0857 59.8384 16.1891C59.7552 16.2294 59.6858 16.2928 59.6389 16.3714C59.592 16.4501 59.5696 16.5406 59.5745 16.6316C59.5731 16.7179 59.5953 16.8029 59.6387 16.8778C59.6998 16.9544 59.7772 17.0168 59.8654 17.0608C59.9957 17.1283 60.133 17.1818 60.2749 17.2205C60.444 17.267 60.6538 17.3236 60.9042 17.3835C61.4253 17.5165 61.8618 17.6496 62.2205 17.7794C62.5325 17.8867 62.8275 18.0368 63.0968 18.2252C63.3035 18.3675 63.469 18.56 63.5773 18.7841C63.6811 19.0213 63.7319 19.2777 63.7262 19.5359C63.7317 19.858 63.661 20.1768 63.5198 20.4674C63.3794 20.7475 63.1729 20.9905 62.9175 21.1761C62.6354 21.3805 62.3178 21.5327 61.9802 21.6252C61.5871 21.7343 61.1807 21.7903 60.7723 21.7915Z"
                  fill="#212121"
                />
                <path
                  d="M66.3179 21.6617L63.8208 14.7419H66.0235L67.5699 19.9883L69.1263 14.7419H71.1565L68.656 21.6617H66.3179Z"
                  fill="#212121"
                />
                <path
                  d="M73.6132 21.7915C73.2822 21.7951 72.9532 21.7399 72.6421 21.6285C72.3557 21.5255 72.0925 21.3684 71.8673 21.1661C71.6531 20.9677 71.4816 20.729 71.3631 20.4641C71.2312 20.178 71.1654 19.8666 71.1707 19.5525C71.176 19.2384 71.2521 18.9294 71.3936 18.6477C71.5451 18.3634 71.7589 18.1157 72.0195 17.9224C72.3055 17.7101 72.6274 17.549 72.9703 17.4467C73.3674 17.3285 73.7804 17.2702 74.1952 17.2737C74.4833 17.2742 74.7708 17.2987 75.0547 17.3469C75.3049 17.3881 75.5484 17.4619 75.7788 17.5664V17.2338C75.7788 16.4353 75.3118 16.0328 74.3678 16.0328C73.9925 16.0325 73.6201 16.0978 73.2681 16.2257C72.8781 16.373 72.5077 16.5663 72.165 16.8013L71.5357 15.4705C71.984 15.1825 72.4716 14.9585 72.9839 14.8052C73.5033 14.6537 74.0426 14.5786 74.5843 14.5823C75.6502 14.5823 76.4758 14.8285 77.0544 15.3208C77.3556 15.5946 77.5907 15.9312 77.7424 16.306C77.894 16.6808 77.9584 17.0842 77.9307 17.4866V19.2698C77.9139 19.427 77.9574 19.5848 78.0526 19.7123C78.1734 19.8107 78.3253 19.8648 78.4823 19.8653V21.6618C78.2938 21.7027 78.1028 21.7316 77.9104 21.7483C77.7345 21.7483 77.5721 21.7682 77.4469 21.7682C77.1291 21.7796 76.8154 21.6961 76.5468 21.5287C76.4417 21.4519 76.3532 21.3552 76.2864 21.2444C76.2196 21.1336 76.1758 21.0109 76.1577 20.8833L76.1171 20.5506C75.8171 20.9336 75.4331 21.2452 74.9938 21.4622C74.5664 21.6774 74.0934 21.7903 73.6132 21.7915ZM74.2426 20.2745C74.4736 20.274 74.7026 20.2334 74.9193 20.1547C75.121 20.0813 75.3052 19.9681 75.4607 19.822C75.5476 19.767 75.6206 19.6931 75.674 19.606C75.7274 19.5189 75.7597 19.421 75.7686 19.3197V18.6543C75.571 18.5819 75.3672 18.5274 75.1596 18.4913C74.9577 18.4532 74.7527 18.4332 74.5471 18.4314C74.2028 18.4159 73.8625 18.5092 73.576 18.6976C73.4558 18.7716 73.3575 18.8754 73.2909 18.9987C73.2244 19.1219 73.192 19.2601 73.1971 19.3995C73.1944 19.5193 73.2199 19.638 73.2715 19.7465C73.3232 19.855 73.3996 19.9503 73.4948 20.025C73.7048 20.1949 73.9707 20.2836 74.2426 20.2745Z"
                  fill="#212121"
                />
                <path
                  d="M79.3754 12.0206H81.5138V19.0668C81.5138 19.5958 81.7439 19.862 82.2108 19.862C82.3254 19.858 82.4391 19.8401 82.5492 19.8087C82.6663 19.776 82.7797 19.7314 82.8875 19.6757L83.2056 21.3956C82.9096 21.5286 82.5983 21.6257 82.2785 21.6851C81.9606 21.7537 81.6363 21.7894 81.3108 21.7915C80.7893 21.8233 80.2759 21.6538 79.8795 21.3191C79.7037 21.1366 79.5681 20.9204 79.4814 20.6839C79.3946 20.4475 79.3585 20.1959 79.3754 19.9451V12.0206Z"
                  fill="#212121"
                />
                <path
                  d="M83.7946 12.0206H85.9466V19.0669C85.9466 19.5958 86.18 19.862 86.6436 19.862C86.7582 19.858 86.8718 19.8401 86.982 19.8087C87.1051 19.7776 87.2243 19.733 87.3372 19.6757L87.6215 21.379C87.3258 21.5129 87.0144 21.6101 86.6943 21.6684C86.3765 21.7373 86.0521 21.773 85.7266 21.7749C85.2062 21.8068 84.6937 21.6373 84.2987 21.3025C84.1218 21.1206 83.9853 20.9046 83.8979 20.668C83.8105 20.4315 83.7742 20.1796 83.7912 19.9285L83.7946 12.0206Z"
                  fill="#212121"
                />
                <path
                  d="M91.1843 21.7915C90.8762 21.7916 90.5686 21.7694 90.2639 21.7249C89.9459 21.6817 89.6278 21.6218 89.3199 21.5486C89.0131 21.4756 88.7113 21.3834 88.4165 21.2725C88.1549 21.1741 87.9034 21.0515 87.6653 20.9065L88.5112 19.4826C88.9399 19.7298 89.3935 19.9327 89.8646 20.0881C90.271 20.2252 90.6972 20.2971 91.1267 20.301C91.3759 20.3161 91.6247 20.2656 91.8475 20.1547C91.9248 20.1141 91.989 20.053 92.0327 19.9783C92.0764 19.9036 92.0978 19.8183 92.0945 19.7322C92.0903 19.6349 92.0555 19.5414 91.9949 19.4645C91.9342 19.3876 91.8508 19.3312 91.7561 19.303C91.3809 19.155 90.9952 19.0338 90.6023 18.9404C90.1918 18.8383 89.7874 18.7139 89.3909 18.5678C89.1049 18.4711 88.8356 18.332 88.5924 18.1552C88.4055 18.019 88.2556 17.8396 88.1559 17.6329C88.0614 17.4156 88.0163 17.1805 88.0239 16.9443C88.0192 16.6102 88.0946 16.2797 88.2439 15.9795C88.3894 15.6914 88.5986 15.439 88.8563 15.2409C89.1311 15.0305 89.4415 14.8695 89.7733 14.7652C90.1498 14.6488 90.5426 14.5915 90.9373 14.5955C91.4482 14.5972 91.9562 14.67 92.4464 14.8118C92.9721 14.9588 93.4812 15.1583 93.9656 15.4073L93.1197 16.738C92.7457 16.5283 92.3527 16.3534 91.9456 16.2157C91.6183 16.108 91.2757 16.0518 90.9305 16.0494C90.6965 16.0392 90.4638 16.0872 90.2538 16.1891C90.1715 16.2302 90.103 16.2938 90.0568 16.3724C90.0105 16.4509 89.9885 16.5409 89.9932 16.6316C89.9903 16.718 90.0126 16.8034 90.0575 16.8777C90.1252 16.9611 90.2122 17.0273 90.3113 17.0707C90.4425 17.1386 90.581 17.1921 90.7241 17.2304C90.8933 17.277 91.1031 17.3335 91.3534 17.3934C91.8711 17.5265 92.3076 17.6595 92.6697 17.7893C92.9806 17.8966 93.2746 18.0466 93.5427 18.2351C93.7518 18.3774 93.9206 18.5698 94.0333 18.794C94.1371 19.0312 94.1879 19.2876 94.1822 19.5458C94.1865 19.8681 94.1147 20.187 93.9724 20.4774C93.8276 20.7585 93.6165 21.0015 93.3566 21.186C93.0729 21.3898 92.7543 21.5419 92.4159 21.6351C92.0146 21.7427 91.6002 21.7953 91.1843 21.7915Z"
                  fill="#212121"
                />
                <path
                  d="M29.3247 33.5452L27.4806 30.7606L26.7294 31.5291V33.5452H24.5808V23.8974H26.7294V29.4865L29.1183 26.6054H31.4056L28.8645 29.5996L31.6052 33.5452H29.3247Z"
                  fill="#212121"
                />
                <path
                  d="M35.1007 33.6783C34.5507 33.6878 34.0043 33.5894 33.4935 33.3888C33.0461 33.2101 32.6416 32.9415 32.3058 32.6004C31.9847 32.2711 31.7359 31.8804 31.5749 31.4526C31.241 30.5706 31.241 29.5999 31.5749 28.718C31.7359 28.2902 31.9847 27.8995 32.3058 27.5702C32.644 27.2302 33.0477 26.9599 33.4935 26.7751C34.0032 26.5703 34.5501 26.4695 35.1007 26.479C35.648 26.4699 36.1914 26.5706 36.6978 26.7751C37.1366 26.9615 37.5334 27.2317 37.8651 27.5702C38.1943 27.8964 38.4512 28.286 38.6197 28.7146C38.7904 29.1521 38.8776 29.6167 38.8768 30.0853C38.8775 30.5511 38.7927 31.0131 38.6264 31.4493C38.4619 31.8864 38.2058 32.2846 37.8747 32.6182C37.5436 32.9517 37.1449 33.2131 36.7045 33.3855C36.195 33.5869 35.6498 33.6865 35.1007 33.6783ZM33.5273 30.0886C33.5028 30.5647 33.661 31.0325 33.9705 31.3994C34.1095 31.5595 34.2831 31.6871 34.4786 31.7729C34.6741 31.8586 34.8867 31.9004 35.1007 31.8951C35.3137 31.898 35.5244 31.8525 35.7165 31.762C35.9051 31.6748 36.0732 31.5502 36.2105 31.3961C36.3584 31.2263 36.4731 31.0312 36.5489 30.8205C36.6333 30.5856 36.6746 30.3378 36.6707 30.0886C36.6993 29.6059 36.5409 29.1304 36.2274 28.7579C36.0911 28.599 35.9204 28.4721 35.7278 28.3864C35.5352 28.3006 35.3256 28.2582 35.1142 28.2622C34.8982 28.2613 34.6846 28.3067 34.4882 28.3953C34.2979 28.4811 34.1292 28.6072 33.9942 28.7645C33.8432 28.932 33.7281 29.1278 33.6559 29.3401C33.5687 29.5802 33.5251 29.8336 33.5273 30.0886Z"
                  fill="#212121"
                />
                <path
                  d="M50.9259 33.5452H48.7739V29.6495C48.8032 29.2993 48.7165 28.9492 48.5269 28.6514C48.4481 28.5498 48.3453 28.4685 48.2274 28.4146C48.1095 28.3607 47.9801 28.3358 47.8502 28.342C47.5391 28.3511 47.2415 28.469 47.0111 28.6747C46.7322 28.9104 46.526 29.2181 46.4156 29.563V33.5452H44.294V29.6495C44.3222 29.2989 44.2344 28.9488 44.0436 28.6514C43.9644 28.5502 43.8615 28.4692 43.7437 28.4154C43.6259 28.3615 43.4967 28.3364 43.3669 28.342C43.0559 28.3514 42.7584 28.4693 42.5278 28.6747C42.2453 28.9126 42.0366 29.2239 41.9255 29.5729V33.5452H39.7769V26.6121H41.7123V27.7765C41.9648 27.3603 42.3336 27.0243 42.7748 26.8083C43.26 26.5794 43.7931 26.4655 44.3312 26.4757C44.5914 26.4706 44.8507 26.5065 45.0993 26.5821C45.3045 26.6452 45.4969 26.7432 45.6678 26.8716C45.8209 26.9923 45.9524 27.1373 46.0569 27.3007C46.1582 27.4637 46.2335 27.641 46.2802 27.8264C46.5303 27.4055 46.8931 27.0603 47.3291 26.8283C47.794 26.5964 48.3104 26.4821 48.8315 26.4956C49.2085 26.479 49.5829 26.5641 49.9142 26.7418C50.1781 26.8951 50.3972 27.1129 50.5504 27.3739C50.704 27.6368 50.8061 27.9257 50.8515 28.2256C50.9017 28.5225 50.9277 28.8228 50.9293 29.1238L50.9259 33.5452Z"
                  fill="#212121"
                />
                <path
                  d="M63.337 33.5452H61.1884V29.6495C61.2166 29.2989 61.1288 28.9488 60.938 28.6514C60.8592 28.5498 60.7564 28.4685 60.6385 28.4146C60.5206 28.3607 60.3911 28.3358 60.2613 28.342C59.9491 28.3506 59.6502 28.4686 59.4187 28.6747C59.1469 28.9166 58.9479 29.2273 58.8435 29.5729V33.5452H56.6915V29.6495C56.7207 29.2993 56.6341 28.9492 56.4445 28.6514C56.3661 28.5493 56.2634 28.4677 56.1454 28.4138C56.0274 28.3599 55.8977 28.3352 55.7678 28.342C55.4566 28.3508 55.159 28.4688 54.9287 28.6747C54.6468 28.9112 54.4391 29.2216 54.3298 29.5696V33.5452H52.1812V26.6121H54.1064V27.7765C54.3598 27.361 54.7284 27.0252 55.1689 26.8083C55.6542 26.5794 56.1872 26.4655 56.7254 26.4757C56.9855 26.4706 57.2449 26.5065 57.4935 26.5821C57.6987 26.6452 57.8911 26.7432 58.0619 26.8716C58.216 26.9922 58.3487 27.1373 58.4544 27.3007C58.5546 27.4639 58.6288 27.6411 58.6743 27.8264C58.9254 27.4063 59.288 27.0612 59.7233 26.8283C60.1895 26.5968 60.7068 26.4825 61.229 26.4956C61.6049 26.4789 61.9783 26.5641 62.3084 26.7418C62.5729 26.8943 62.7922 27.1122 62.9445 27.3739C63.0978 27.6373 63.2009 27.9259 63.249 28.2256C63.2965 28.5228 63.3214 28.823 63.3235 29.1238L63.337 33.5452Z"
                  fill="#212121"
                />
                <path
                  d="M66.7478 33.6783C66.4414 33.6963 66.1349 33.6458 65.8512 33.5305C65.5675 33.4153 65.3142 33.2383 65.1101 33.0129C64.6935 32.4416 64.4947 31.7444 64.5484 31.0434V26.6121H66.6936V30.5876C66.6724 30.9301 66.7624 31.2703 66.9508 31.5591C67.0347 31.6685 67.1445 31.756 67.2707 31.814C67.397 31.872 67.5357 31.8987 67.6749 31.8917C67.9684 31.89 68.2564 31.8132 68.5106 31.6688C68.8152 31.4778 69.0609 31.2087 69.2212 30.8904V26.6121H71.363V31.1698C71.3491 31.3268 71.3922 31.4836 71.4849 31.6123C71.6062 31.7096 71.758 31.7625 71.9146 31.762V33.5452C71.7226 33.5859 71.5282 33.6148 71.3326 33.6317C71.1668 33.6317 71.0179 33.6516 70.8927 33.6516C70.1415 33.6516 69.7051 33.3489 69.59 32.7667L69.5494 32.3442C69.2499 32.7791 68.8343 33.1244 68.3482 33.3422C67.8463 33.5683 67.2999 33.6831 66.7478 33.6783Z"
                  fill="#212121"
                />
                <path
                  d="M79.7783 33.5452H77.6297V29.6495C77.6603 29.2974 77.5684 28.9455 77.3691 28.6514C77.2855 28.5509 77.1794 28.4707 77.0591 28.417C76.9388 28.3634 76.8075 28.3377 76.6755 28.342C76.5173 28.3424 76.3608 28.3741 76.2153 28.4352C76.0543 28.4976 75.9046 28.5852 75.7721 28.6947C75.6277 28.8084 75.4982 28.9391 75.3863 29.0839C75.27 29.231 75.1796 29.3964 75.119 29.5729V33.5452H72.967V26.6121H74.9025V27.7764C75.1667 27.3577 75.5503 27.0245 76.0055 26.8183C76.5187 26.5867 77.0787 26.473 77.6432 26.4856C78.0288 26.4698 78.4117 26.5547 78.753 26.7318C79.0222 26.8828 79.2463 27.1008 79.4027 27.3639C79.5578 27.6262 79.66 27.9153 79.7038 28.2156C79.753 28.5126 79.7779 28.8129 79.7783 29.1138V33.5452Z"
                  fill="#212121"
                />
              </svg>
              <span className="text-sm tracking-tight lg:hidden">Mina sidor</span>
            </a>
          </Link>
        </div>

        <div className="block lg:flex justify-end lg:items-center lg:w-auto">
          {/* <div className="text-lg lg:flex-grow lg:flex lg:items-center lg:justify-center hidden"></div> */}

          {/* <div className="block lg:block"> */}
          <UserMenu menuTitle="Företagsbolaget AB" menuSubTitle="Förnamn Efternamn" menuGroups={menuGroups}></UserMenu>
          {/* </div> */}
        </div>
      </div>
    </div>
  </nav>
);
