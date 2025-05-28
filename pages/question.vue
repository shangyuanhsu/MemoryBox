<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center py-8">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        {{ isEditMode ? 'Edit Question' : 'Create Question' }}
      </h1>
      <form @submit.prevent="handleSubmit">
        <!-- Question Input (Text or Image) -->
        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-2">Question</label>
          <div class="flex items-center space-x-4 mb-2">
            <button
              type="button"
              :class="[
                questionType === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700',
                'px-4 py-2 rounded-lg transition'
              ]"
              @click="questionType = 'text'"
            >
              Text
            </button>
            <button
              type="button"
              :class="[
                questionType === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700',
                'px-4 py-2 rounded-lg transition'
              ]"
              @click="questionType = 'image'"
            >
              Image
            </button>
          </div>
          <div v-if="questionType === 'text'">
            <textarea
              v-model="form.questionText"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter question text"
              rows="4"
              required
            ></textarea>
          </div>
          <div v-else>
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="w-full px-4 py-2 border rounded-lg"
              required
            />
            <p v-if="imagePreview" class="mt-2 text-sm text-gray-600">Image Preview:</p>
            <img
              v-if="imagePreview"
              :src="imagePreview"
              alt="Question Image Preview"
              class="mt-2 max-w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <!-- Answer Input -->
        <div class="mb-6">
          <label for="answer" class="block text-gray-700 font-medium mb-2">Answer</label>
          <textarea
            id="answer"
            v-model="form.answer"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter answer"
            rows="3"
            required
          ></textarea>
        </div>

        <!-- Category Selection and Creation -->
        <div class="mb-6">
          <label for="category" class="block text-gray-700 font-medium mb-2">Category</label>
          <div class="flex items-center space-x-2">
            <select
              v-if="!isCreatingCategory"
              v-model="form.category"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="" disabled>Select a category</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <input
              v-else
              v-model="newCategory"
              type="text"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter new category"
            />
            <button
              type="button"
              :class="[
                isCreatingCategory ? 'bg-red-600 text-white' : 'bg-blue-600 text-white',
                'px-4 py-2 rounded-lg transition'
              ]"
              @click="toggleCategoryCreation"
            >
              {{ isCreatingCategory ? 'Cancel' : 'Add New' }}
            </button>
          </div>
          <p v-if="errors.category" class="text-red-500 text-sm mt-1">{{ errors.category }}</p>
        </div>

        <!-- Enable/Disable Toggle (Edit Mode Only) -->
        <div v-if="isEditMode" class="mb-6">
          <label class="block text-gray-700 font-medium mb-2">Status</label>
          <div class="flex items-center space-x-4">
            <span :class="form.isActive ? 'text-green-600' : 'text-red-600'">
              {{ form.isActive ? 'Active' : 'Hidden' }}
            </span>
            <button
              type="button"
              :class="[
                form.isActive ? 'bg-gray-300' : 'bg-blue-600',
                'relative inline-flex h-6 w-11 items-center rounded-full transition'
              ]"
              @click="form.isActive = !form.isActive"
            >
              <span
                :class="[
                  form.isActive ? 'translate-x-6' : 'translate-x-1',
                  'inline-block h-4 w-4 transform bg-white rounded-full transition'
                ]"
              />
            </button>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {{ isEditMode ? 'Update Question' : 'Create Question' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Define form data type
interface QuestionForm {
  questionText: string;
  questionImage: File | null;
  answer: string;
  category: string;
  isActive: boolean;
}

const route = useRoute();
const router = useRouter();

// Form state
const form = ref<QuestionForm>({
  questionText: '',
  questionImage: null,
  answer: '',
  category: '',
  isActive: true,
});

// Other states
const questionType = ref<'text' | 'image'>('text');
const imagePreview = ref<string | null>(null);
const isCreatingCategory = ref(false);
const newCategory = ref('');
const categories = ref<string[]>(['Math', 'Science', 'History', 'English']); // Example categories
const errors = ref<{ category?: string }>({});

// Determine if in edit mode
const isEditMode = computed(() => !!route.query.id);

// Handle image upload
const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    form.value.questionImage = input.files[0];
    imagePreview.value = URL.createObjectURL(input.files[0]);
  }
};

// Toggle category creation
const toggleCategoryCreation = () => {
  isCreatingCategory.value = !isCreatingCategory.value;
  if (!isCreatingCategory.value && newCategory.value.trim()) {
    categories.value.push(newCategory.value.trim());
    form.value.category = newCategory.value.trim();
    newCategory.value = '';
  }
};

// Handle form submission
const handleSubmit = () => {
  errors.value = {};

  // Validate category
  if (!form.value.category && !isCreatingCategory.value) {
    errors.value.category = 'Please select or create a category';
    return;
  }

  // Handle new category
  if (isCreatingCategory.value && newCategory.value.trim()) {
    categories.value.push(newCategory.value.trim());
    form.value.category = newCategory.value.trim();
    newCategory.value = '';
    isCreatingCategory.value = false;
  } else if (isCreatingCategory.value) {
    errors.value.category = 'Please enter a category name';
    return;
  }

  // Log form data for debugging
  console.log('Form submitted:', {
    ...form.value,
    questionType: questionType.value,
  });

  // Redirect after submission
  router.push('/dashboard');
};

// Simulate loading question data in edit mode
onMounted(() => {
  if (isEditMode.value) {
    // Simulate fetching question data
    const questionId = route.query.id;
    console.log(`Editing question with ID: ${questionId}`);
    // Example: Pre-fill form for testing
    form.value = {
      questionText: 'Sample question',
      questionImage: null,
      answer: 'Sample answer',
      category: 'Math',
      isActive: true,
    };
    questionType.value = 'text';
  }
});
</script>