import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle + " - Sharpline Solutions";
    }
  }, [pageTitle]);
};

export default SEO;