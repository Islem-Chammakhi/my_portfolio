interface SkillCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor:string;
  }
const Card:React.FC<SkillCardProps>= ({ title, description, icon,backgroundColor }) => {

  return (
    <div className={`max-w-sm  overflow-hidden shadow-lg p-4 rounded-md ${backgroundColor} transform transition-transform duration-300 hover:scale-105`}>
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <div className="text-center">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
  )
}

export default Card