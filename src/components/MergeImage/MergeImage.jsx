/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mergeImages from 'merge-images';
import ReactSelect from 'react-select';
import {
  Button, Card, CardBody, Label,
} from 'reactstrap';

import {
  CASE, CROWN, DIAL, STRAP,
} from 'constants/faker';

function MergeImage() {
  const [image, setImage] = useState(null);
  const [caseWatch, setCaseWatch] = useState('');
  const [dial, setDial] = useState('');
  const [crown, setCrown] = useState('');
  const [strap, setStrap] = useState('');

  console.log(crown);

  const handleSelectCase = (e) => {
    setCaseWatch(e.value);
  };

  const handleSelectDial = (e) => {
    setDial(e.value);
  };

  const handleSelectCrown = (e) => {
    setCrown(e.value);
  };

  const handleSelectStrap = (e) => {
    setStrap(e.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await mergeImages([caseWatch, dial, crown, strap]).then((b64) => setImage(b64));
  };

  const onDownload = async (e) => {
    const a = document.createElement('a'); // Create <a>
    a.href = image; // Image Base64 Goes here
    a.download = 'Image.png'; // File name Here
    a.click(); // Downloaded file
  };

  return (
    <div className="container p-4">
      <Card>
        <CardBody>
          {image && (
          <div className="row">
            <img src={image} alt="watch" crossOrigin="true" style={{ width: '300px', height: 'auto' }} />

            <Button onClick={onDownload}>
              Download
            </Button>
          </div>
          )}

          <div className="row">
            <Label className="col-form-label">Case</Label>

            <ReactSelect
              value={CASE.filter((item) => item.value === caseWatch)}
              onChange={handleSelectCase}
              options={CASE}
            />
          </div>

          <div className="row">
            <Label className="col-form-label">Dial</Label>

            <ReactSelect
              value={DIAL.filter((item) => item.value === dial)}
              onChange={handleSelectDial}
              options={DIAL}
            />
          </div>

          <div className="row">
            <Label className="col-form-label">Crown</Label>

            <ReactSelect
              value={CROWN.filter((item) => item.value === crown)}
              onChange={handleSelectCrown}
              options={CROWN}
            />
          </div>

          <div className="row mb-3">
            <Label className="col-form-label">Strap</Label>

            <ReactSelect
              value={STRAP.filter((item) => item.value === strap)}
              onChange={handleSelectStrap}
              options={STRAP}
            />
          </div>

          <Button className="bg-primary" onClick={onSubmit}>
            Confirm
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default MergeImage;
