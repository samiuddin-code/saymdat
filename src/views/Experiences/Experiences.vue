<template>
  <div class="experiences">
    <div class="experiences-title">
      <Title
        :bText="elements.boldText"
        :lText="elements.lightText"
  :video="elements.video"
      />
    </div>
    <IntroSection
      :paragraphs="elements.introParas"
      :title="elements.title"
      :txtParagraphs="elements.txtParagraphs"
     :image="require('../../assets/ExperiencesArticle/Golf.png')"
    />
    <div class="experiences-article">
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Golf.png')"
        :title="elements.expTitle"
        :paragraph="elements.expPara"
      />
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Outdoor.png')"
        :title="elements.expTitle2"
        :paragraph="elements.expPara2"
        :mirror="true"
      />
      <ExperiencesArticle
        :image="require('../../assets/ExperiencesArticle/Wellness.png')"
        :title="elements.expTitle3"
        :paragraph="elements.expPara3"
      />
    </div>
    <BottomSection picture="Experiences.jpg" />
  </div>
</template>

<script type="module" src="./Experiences.ts"></script>

<style lang="scss" scoped>
@use "./Experiences";
</style>