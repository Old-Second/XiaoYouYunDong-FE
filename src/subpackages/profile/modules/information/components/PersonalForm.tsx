import { Picker, Text, View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { AtForm, AtImagePicker, AtInput, AtList, AtListItem } from 'taro-ui';

import { IdentityFormData } from './IdentityForm';
import { SchoolFormData } from './SchoolForm';

const genderOptions: string[] = ['男', '女'];

export interface PersonalFormData {
  avatar: string;
  nickname: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  height: string;
  weight: string;
}

interface PersonalFormProps {
  OnSubmit: (
    name: string,
    value: PersonalFormData | IdentityFormData | SchoolFormData[]
  ) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ OnSubmit }) => {
  const [personalFormData, setPersonalFormData] = useState<PersonalFormData>({
    avatar: '',
    nickname: '',
    gender: '',
    dateOfBirth: '',
    phone: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (name: string, value: string | number) => {
    // console.log(value);
    setPersonalFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    OnSubmit('personal', personalFormData);
  }, [OnSubmit, personalFormData]);

  return (
    <View className="mx-auto my-5 flex w-5/6 rounded-xl bg-white">
      <AtForm className="mx-auto my-5 w-5/6">
        <View className="flex items-center justify-center pl-[32rpx]">
          <Text className="w-3/12">头像</Text>
          <AtImagePicker
            count={1}
            multiple={false}
            // showAddBtn={!personalFormData.avatar}
            files={[{ url: personalFormData.avatar }]}
            onChange={(e) => {
              handleInputChange('avatar', e[1].url);
            }}
          />
        </View>
        <AtInput
          required
          name="nickname"
          title="昵称"
          type="text"
          placeholder="请输入昵称"
          value={personalFormData.nickname}
          onChange={(v) => {
            handleInputChange('nickname', v);
          }}
        />
        <Picker
          mode="selector"
          range={genderOptions}
          onChange={(e) => {
            handleInputChange('gender', genderOptions[e.detail.value] as string);
          }}
        >
          <AtList>
            <AtListItem title="性别" extraText={personalFormData.gender} />
          </AtList>
        </Picker>
        <Picker
          mode="date"
          value={personalFormData.dateOfBirth}
          onChange={(e) => {
            handleInputChange('dateOfBirth', e.detail.value);
          }}
        >
          <AtList>
            <AtListItem title="出生日期" extraText={personalFormData.dateOfBirth} />
          </AtList>
        </Picker>
        <AtInput
          required
          name="phone"
          title="联系电话"
          type="phone"
          placeholder="联系电话"
          value={personalFormData.phone}
          onChange={(v) => {
            handleInputChange('phone', v);
          }}
        />
        <AtInput
          name="height"
          title="身高"
          type="number"
          maxLength={3}
          placeholder="身高"
          value={personalFormData.height}
          onChange={(v) => {
            handleInputChange('height', v);
          }}
        >
          cm
        </AtInput>
        <AtInput
          name="weight"
          title="体重"
          type="number"
          maxLength={3}
          placeholder="体重"
          value={personalFormData.weight}
          onChange={(v) => {
            handleInputChange('weight', v);
          }}
        >
          kg
        </AtInput>
      </AtForm>
    </View>
  );
};
export default PersonalForm;
