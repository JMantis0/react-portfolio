import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import resume from "../assets/pdf/jesse-mazur-resume.pdf";
import { pdfjs } from "react-pdf";
import { SizeMe, withSize } from "react-sizeme";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const useStyles = makeStyles((mainTheme) => ({
    horizontalLine: {
      content: " ",
      display: "block",
      width: "100%",
      backgroundColor: "#e7e9eb",
      color: "#eeeeee",
      height: "2px",
      marginBottom: "10px",
    },
    root: {
      backgroundColor: mainTheme.palette.background.paperSecond,
      padding: "5%",
      marginBottom: "50px",
    },
    inner: {
      backgroundColor: mainTheme.palette.background.paper,
      padding: "5%",
    },
  }));
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const withSizeHOC = withSize();

  return (
    <Paper className={classes.root}>
      <Paper className={classes.inner}>
        <Grid id="resumeGridContainer" justify="center" container>
          <Grid item id="resumeGridItem" style={{ width: "100%" }}>
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
                </div>
              )}
            />
          </Grid>
          <div className={classes.horizontalLine}></div>
        </Grid>
      </Paper>
    </Paper>
  );
}

export default Resume;
