import { Picker, Text, View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { AtForm, AtInput, AtList, AtListItem } from 'taro-ui';

import { IdentityFormData } from './IdentityForm';
import { PersonalFormData } from './PersonalForm';

const degreeOptions: string[] = ['本科', '硕士', '博士', '高中'];

export interface SchoolFormData {
  degree: string;
  college: string;
  school: string;
  startYear: string;
  endYear: string;
}

interface SchoolFormProps {
  OnSubmit: (
    name: string,
    value: PersonalFormData | IdentityFormData | SchoolFormData[]
  ) => void;
}

const SchoolForm: React.FC<SchoolFormProps> = ({ OnSubmit }) => {
  const [schoolFormData, setSchoolFormData] = useState<SchoolFormData[]>([
    {
      degree: '',
      college: '',
      school: '',
      startYear: '',
      endYear: '',
    },
  ]);

  const handleInputChange = (index: number, name: string, value: string | number) => {
    // console.log(value);
    setSchoolFormData((prevForms) => {
      const newForms = [...prevForms];
      newForms[index][name] = value;
      return newForms;
    });
  };

  useEffect(() => {
    OnSubmit('school', schoolFormData);
  }, [OnSubmit, schoolFormData]);

  const handleAddEducation = () => {
    setSchoolFormData((prevForms) => [
      ...prevForms,
      {
        degree: '',
        college: '',
        school: '',
        startYear: '',
        endYear: '',
      },
    ]);
  };
  const handleRemoveEducation = (index: number) => {
    setSchoolFormData((prevForms) => {
      const newForms = [...prevForms];
      newForms.splice(index, 1);
      return newForms;
    });
  };

  return (
    <View className="mx-auto my-5 flex w-5/6 flex-col rounded-xl bg-white">
      <View className="mx-5 mt-5 flex justify-between">
        <Text>教育经历</Text>
        <Text className="text-xs" onClick={handleAddEducation}>
          增加 +
        </Text>
      </View>

      {schoolFormData.map((form, index) => (
        <AtForm className="mx-auto my-5 w-5/6" key={index}>
          <View className="my-3 w-full text-right">
            <Text className="text-xs" onClick={() => handleRemoveEducation(index)}>
              删除
            </Text>
          </View>

          <Picker
            mode="selector"
            range={degreeOptions}
            onChange={(e) => {
              handleInputChange(index, 'degree', degreeOptions[e.detail.value] as string);
            }}
          >
            <AtList>
              <AtListItem title="学历" extraText={form.degree} />
            </AtList>
          </Picker>
          <AtInput
            required
            name="college"
            title="毕业院校"
            type="text"
            value={form.college}
            onChange={(v) => {
              handleInputChange(index, 'college', v);
            }}
          />
          <AtInput
            required
            name="school"
            title="所属学院"
            type="text"
            value={form.school}
            onChange={(v) => {
              handleInputChange(index, 'school', v);
            }}
          />
          <Picker
            mode="date"
            fields="year"
            value={form.startYear}
            onChange={(e) => {
              handleInputChange(index, 'startYear', e.detail.value);
            }}
          >
            <AtList>
              <AtListItem title="入学年份" extraText={form.startYear} />
            </AtList>
          </Picker>
          <Picker
            mode="date"
            fields="year"
            value={form.endYear}
            onChange={(e) => {
              handleInputChange(index, 'endYear', e.detail.value);
            }}
          >
            <AtList>
              <AtListItem title="毕业年份" extraText={form.endYear} />
            </AtList>
          </Picker>
        </AtForm>
      ))}
      {/*<AtForm className="mx-auto my-5 w-5/6">*/}
      {/*  <Picker*/}
      {/*    mode="selector"*/}
      {/*    range={degreeOptions}*/}
      {/*    onChange={(e) => {*/}
      {/*      handleInputChange('degree', degreeOptions[e.detail.value] as string);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <AtList>*/}
      {/*      <AtListItem title="学历" extraText={schoolFormData.degree} />*/}
      {/*    </AtList>*/}
      {/*  </Picker>*/}
      {/*  <AtInput*/}
      {/*    required*/}
      {/*    name="college"*/}
      {/*    title="毕业院校"*/}
      {/*    type="text"*/}
      {/*    value={schoolFormData.college}*/}
      {/*    onChange={(v) => {*/}
      {/*      handleInputChange('college', v);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <AtInput*/}
      {/*    required*/}
      {/*    name="school"*/}
      {/*    title="所属学院"*/}
      {/*    type="text"*/}
      {/*    value={schoolFormData.school}*/}
      {/*    onChange={(v) => {*/}
      {/*      handleInputChange('school', v);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <Picker*/}
      {/*    mode="date"*/}
      {/*    fields="year"*/}
      {/*    value={schoolFormData.startYear}*/}
      {/*    onChange={(e) => {*/}
      {/*      handleInputChange('startYear', e.detail.value);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <AtList>*/}
      {/*      <AtListItem title="入学年份" extraText={schoolFormData.startYear} />*/}
      {/*    </AtList>*/}
      {/*  </Picker>*/}
      {/*  <Picker*/}
      {/*    mode="date"*/}
      {/*    fields="year"*/}
      {/*    value={schoolFormData.endYear}*/}
      {/*    onChange={(e) => {*/}
      {/*      handleInputChange('endYear', e.detail.value);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <AtList>*/}
      {/*      <AtListItem title="毕业年份" extraText={schoolFormData.endYear} />*/}
      {/*    </AtList>*/}
      {/*  </Picker>*/}
      {/*</AtForm>*/}
    </View>
  );
};
export default SchoolForm;
