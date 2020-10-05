import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import resume from "../assets/pdf/jesse-mazur-resume.pdf";
import { pdfjs } from "react-pdf";
import { SizeMe, withSize } from "react-sizeme";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const useStyles = makeStyles({
    // resume: {
    //   width: "200%",
    //   minWidth: " 900px",
    // },
  });
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const withSizeHOC = withSize();

  return (
    <Grid id="resumeGridContainer" justify="center" container>
      <Grid item id="resumeGridItem" 
      style={{ width: "90%" }}
      >
        <SizeMe
          monitorWidth
          refreshRate={128}
          refreshMode={"debounce"}
          render={({ size }) => (
            <div>
              {/* <div>My width is {size.width}px</div> */}
              <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                  width={size.width}
                  className={classes.resume}
                  scale={1}
                  pageNumber={pageNumber}
                />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )}
        />
      </Grid>
    </Grid>
  );
}

export default Resume;
