type HeadingProps = {
    children: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <h1 
      className="text-lg font-bold underline underline-offset-4 decoration-amber-400 decoration-4" 
    >
      {props.children}
    </h1>
  )
}