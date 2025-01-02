const City = details => {
  const {namee, imageUrl, description} = details
  return (
    <div>
      <img alt={namee} src={imageUrl} />
      <h1>{namee}</h1>
      <p>{description}</p>
    </div>
  )
}

export default City
