export const ButtonPreview = ({ buttonHtml }: any) => {
  return <pre><div dangerouslySetInnerHTML={{ __html: buttonHtml }} /></pre>
};