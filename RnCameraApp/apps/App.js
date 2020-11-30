import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

import ImagePicker from 'react-native-image-picker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: {uri: 'https://s.hdnux.com/photos/44/04/72/9457338/4/1200x0.jpg'},
    };
  }

  render() {
    return (
      <View style={styles.layout}>
        <Button title="픽커 보기" onPress={this.showPicker} />
        <Text style={styles.urlText} children={this.state.img.uri} />
        <Image source={this.state.img} style={styles.image} />
      </View>
    );
  }

  showPicker = () => {
    // ImagePicker 사용, 카메라나 사진선택하여 이미지 가져오기
    // ImagePicker.options
    const options = {
      title: '픽커 선택',
      takePhotoButtonTitle: '카메라',
      chooseFromLibraryButtonTitle: '이미지 선택',
      cancelButtonTitle: '취소',
      customButtons: [
        {name: 'fb', title: '페이스북 이미지 선택'},
        {name: 'kb', title: '카카오톡 이미지 선택'},
      ],
      storageOptions: {
        skipBackup: true, // iOS에서 iCloud에 백업? 안드로이드는 무시
        path: 'Pictures/images/', // 저장폴더 Pictures/[path] 경로
        privateDirectory: true,
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      if (res.didCancel) {
        alert('취소하였습니다');
      } else if (res.error) {
        alert(`에러 : ${res.error}`);
      } else if (res.customButton) {
        alert(`커스텀버튼 선택 : ${res.customButton}`);
      } else {
        // 선택된 이미지 경로 uri 가져오기
        const uri = {uri: res.uri};
        this.setState({img: uri});
      }
    });
  };
}

const styles = StyleSheet.create({
  layout: {flex: 1, padding: 16},
  urlText: {margin: 8},
  image: {marginTop: 8, flex: 1, borderRadius: 5},
});

export default App;
