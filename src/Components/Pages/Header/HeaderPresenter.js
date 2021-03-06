import React, { useContext, useState } from "react";
import DataContext from "../../../Contexts/DataContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const Title = styled.h2`
  color: #303f9f;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  border: 1px solid #303f9f;
  border-radius: 10px;
  padding: 20px 30px;
`;

const NextBtn = styled.div`
  text-decoration: none;
  color: #ffffff;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #303f9f;
  padding: 10px;
  border: 1px solid #303f9f;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const HeaderPresenter = ({ state, handleChange }) => {
  const projData = useContext(DataContext);
  console.log("header", projData);
  const {
    speechType,
    participants,
    birthPlace,
    place,
    situation,
    recordingQuality,
    transcriber,
    reviewer,
    comment,
    idCorpus,
    idCode,
    idDateOfBirth,
    idAge,
    idSex,
    idGroup,
    idRegion,
    idSES,
    idEdu,
    idRole,
  } = state;

  return (
    <Container style={{ marginTop: 150 }} component="main" maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        KSTARS
      </Typography>
      <Title>헤더 마법사</Title>
      <Form>
        <Grid container direction="column" style={{ marginTop: 30 }}>
          <Grid xs={2} item={true}>
            <Typography style={{ marginTop: 20 }}>헤더 정보 입력</Typography>
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="출생지"
              name="birthPlace"
              value={birthPlace}
              onChange={handleChange}
              helperText="아동의 출생지를 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          {/* <Grid xs={9} item={true}>
            <TextField
              required
              label="스피치 타입"
              name="SpeechType"
              value={projectName}
              onChange={handleChange}
              helperText=""
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid> */}
          <Grid xs={9} item={true}>
            <TextField
              required
              label="장소"
              name="place"
              value={place}
              onChange={handleChange}
              helperText="장소를 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="상황"
              name="situation"
              value={situation}
              onChange={handleChange}
              helperText="상황을 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="전사자"
              name="transcriber"
              value={transcriber}
              onChange={handleChange}
              helperText="전사자를 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="검토자"
              name="reviewer"
              value={reviewer}
              onChange={handleChange}
              helperText="감토자를 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="코멘트"
              name="comment"
              value={comment}
              onChange={handleChange}
              helperText="코멘트를 기재해주세요."
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">녹음 음질</FormLabel>
              <RadioGroup
                aria-label="recording"
                name="recordingQuality"
                onChange={handleChange}
                row
              >
                <FormControlLabel value="good" control={<Radio />} label="상" />
                <FormControlLabel
                  value="average"
                  control={<Radio />}
                  label="중"
                />
                <FormControlLabel value="bad" control={<Radio />} label="하" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="column">
          <Grid xs={2} item={true}>
            <Typography style={{ marginTop: 20 }}>구성원 정보 입력</Typography>
          </Grid>
          <Grid xs={9} item={true}>
            <TextField
              required
              label="구성원"
              name="idRole"
              value={idRole}
              onChange={handleChange}
              helperText="구성원을 기재해주세요. (예)엄마, 아빠"
              fullWidth
              style={{ marginLeft: 10 }}
            />
          </Grid>
          {/* <Grid xs={9} item={true}>
              <TextField
                required
                label=""
                name="IDCorpus"
                // value={projectName}
                // onChange={handleValueChange}
                helperText=""
                fullWidth
                style={{ marginLeft: 10 }}
              />
            </Grid> */}
          {/* <Grid xs={2} item={true}>
              // 출생일
            </Grid> */}
          <Grid xs={2} item={true}>
            <FormControl
              style={{ marginLeft: 10, marginTop: 15, marginBottom: 15 }}
            >
              <InputLabel htmlFor="age-native-simple">연령</InputLabel>
              <Select
                native
                name="idAge"
                value={idAge}
                onChange={handleChange}
                inputProps={{
                  name: "idAge",
                  id: "age-native-simple",
                }}
              >
                <option value={"none"}>선택 안함</option>
                <option value={10}>10대</option>
                <option value={20}>20대</option>
                <option value={30}>30대</option>
                <option value={40}>40대</option>
                <option value={50}>50대</option>
                <option value={60}>60대</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">성별</FormLabel>
              <RadioGroup
                aria-label="idSex"
                name="idSex"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="남자"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="여자"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="없음"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">그룹</FormLabel>
              <RadioGroup
                aria-label="idGroup"
                name="idGroup"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="대도시"
                  control={<Radio />}
                  label="대도시"
                />
                <FormControlLabel
                  value="중소도시"
                  control={<Radio />}
                  label="중소도시"
                />
                <FormControlLabel
                  value="농촌"
                  control={<Radio />}
                  label="농촌"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="없음"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">지역</FormLabel>
              <RadioGroup
                aria-label="idRegion"
                name="idRegion"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="서울/경기"
                  control={<Radio />}
                  label="서울/경기"
                />
                <FormControlLabel
                  value="경상도"
                  control={<Radio />}
                  label="경상도"
                />
                <FormControlLabel
                  value="전라도"
                  control={<Radio />}
                  label="전라도"
                />
                <FormControlLabel
                  value="충청도"
                  control={<Radio />}
                  label="충청도"
                />
                <FormControlLabel
                  value="기타"
                  control={<Radio />}
                  label="기타"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="정보 없음"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">사회적 경제 지위</FormLabel>
              <RadioGroup
                aria-label="idSES"
                name="idSES"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="150만원 이하"
                  control={<Radio />}
                  label="150만원 이하"
                />
                <FormControlLabel
                  value="151~250만원"
                  control={<Radio />}
                  label="151~250만원"
                />
                <FormControlLabel
                  value="251~350만원"
                  control={<Radio />}
                  label="251~350만원"
                />
                <FormControlLabel
                  value="351~450만원"
                  control={<Radio />}
                  label="351~450만원"
                />
                <FormControlLabel
                  value="451만원 이상"
                  control={<Radio />}
                  label="451만원 이상"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="선택 안함"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid xs={9} item={true}>
            <FormControl
              component="fieldset"
              style={{ marginLeft: 10, marginTop: 15 }}
            >
              <FormLabel component="legend">학력</FormLabel>
              <RadioGroup
                aria-label="idEdu"
                name="idEdu"
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="초등학교 졸업 이하"
                  control={<Radio />}
                  label="초등학교 졸업 이하"
                />
                <FormControlLabel
                  value="중학교 졸업"
                  control={<Radio />}
                  label="중학교 졸업"
                />
                <FormControlLabel
                  value="고등학교 졸업"
                  control={<Radio />}
                  label="고등학교 졸업"
                />
                <FormControlLabel
                  value="대학교 졸업"
                  control={<Radio />}
                  label="대학교 졸업"
                />
                <FormControlLabel
                  value="대학원 이상"
                  control={<Radio />}
                  label="대학원 이상"
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="선택 안함"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Form>
      <Link onClick={() => projData.update({ ...state })} to="/waveform/main">
        <NextBtn>Start</NextBtn>
      </Link>
    </Container>
  );
};

export default HeaderPresenter;
