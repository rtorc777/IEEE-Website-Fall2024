const EboardCard = ({member}) => {
    return (
      <div className="text-center">
          <img src={member.image} alt={member.title} className="rounded-full w-72 h-72 mx-auto " />
          <div className="p-4">
              <h3 className="mb-2 text-2xl font-bold tracking-tighter"> 
                  {member.name}
              </h3>
              <p className="text-sm font-bold">{member.position}</p>
              <p className="text-sm">{member.contact}</p>
          </div>
      </div>
    )
  }
  
  export default EboardCard