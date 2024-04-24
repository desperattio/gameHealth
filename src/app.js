// на вход объект вида {name: 'Маг', health: 90}
export default function getHealthLevel(heroObj) {
  if (heroObj.health > 50) return 'healthy';
  if (heroObj.health < 15) return 'critical';
  return 'wounded';
}
