import Entypo from '@expo/vector-icons/Entypo';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
}

const Icon = ({ name, size, color }: IconProps) => {
  return (
    <Entypo name={name} size={size} color={color} />
  )
}

export default Icon