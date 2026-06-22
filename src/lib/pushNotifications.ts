// Mock para a página de demonstração/tour.
// A integração real do Firebase será feita no aplicativo em produção.

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Permissão de Notificação Concedida no Tour.');
      return true;
    } else {
      console.warn('Permissão de Notificação Negada no Tour.');
      return false;
    }
  } catch (error) {
    console.error('Erro ao pedir permissão de notificação no Tour:', error);
    return false;
  }
};
