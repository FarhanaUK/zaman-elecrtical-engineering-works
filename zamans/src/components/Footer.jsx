const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 bg-gray-200">
      <h2 className="font-bold">Address:</h2>
      <p>11 Maddams St, London E3 3RA</p>
      <h2 className="font-bold">Contact:</h2>
      <p>07473 608236</p>

      <p className="text-center pt-6">&copy; {new Date().getFullYear()} Developed By Farhana Aktar</p>
    </div>
  )
}

export default Footer
