import Image from "next/image";

export default function Profile ({ userName, userID, profileImage }){
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex flex-row justify-start gap-2">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image src={profileImage} alt={`Imagen de Perfil del usuario de Twitter con nombre ${userName}`} width={64} height={64}/>
          </div>
        </div>
        <div className="flex flex-col flex-nowrap">
          <p className="text-[#000]">{userName}</p>
          <p className="text-[#000]">@{userID}</p>
        </div>
      </div>
    </div>
  );
}