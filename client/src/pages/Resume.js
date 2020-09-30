import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import resume from "../assets/pdf/jesse-mazur-resume.pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const useStyles = makeStyles({
    resume: {
      width: "100%",
    },
  });
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Grid id="resumeGridContainer" justify="center" container>
      <Grid item id="resumeGridItem">
        <Document
          className={classes.resume}
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Grid>
    </Grid>
  );
}

export default Resume;
