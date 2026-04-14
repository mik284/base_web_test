// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const antd = {
  theme: {
    token: {
      colorPrimary: '#1F2B5D', // navy
      colorSuccess: '#8AFEA7', // mint
      colorInfo: '#0800F0', // electric
      colorWarning: '#F7B344', // orange
      colorError: '#ff4d4f',
      fontFamily: 'Outfit, sans-serif',
      borderRadius: 12,
      colorTextBase: '#1F2B5D',
      colorBgBase: '#ffffff',
      colorLink: '#0800F0',
    },
    components: {
      Button: {
        controlHeightLG: 48,
        fontWeight: 600,
        borderRadius: 12,
        borderRadiusLG: 16,
      },
      Segmented: {
        itemSelectedBg: '#1F2B5D',
        itemSelectedColor: '#ffffff',
        borderRadius: 12,
        controlHeight: 48,
      },
      Card: {
        borderRadiusLG: 24,
      },
      Input: {
        borderRadius: 12,
        controlHeight: 40,
      },
      Select: {
        borderRadius: 12,
        controlHeight: 40,
      },
    },
  },
};
