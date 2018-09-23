require 'test_helper'

class ScaffoldControllersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @scaffold_controller = scaffold_controllers(:one)
  end

  test "should get index" do
    get scaffold_controllers_url, as: :json
    assert_response :success
  end

  test "should create scaffold_controller" do
    assert_difference('ScaffoldController.count') do
      post scaffold_controllers_url, params: { scaffold_controller: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show scaffold_controller" do
    get scaffold_controller_url(@scaffold_controller), as: :json
    assert_response :success
  end

  test "should update scaffold_controller" do
    patch scaffold_controller_url(@scaffold_controller), params: { scaffold_controller: {  } }, as: :json
    assert_response 200
  end

  test "should destroy scaffold_controller" do
    assert_difference('ScaffoldController.count', -1) do
      delete scaffold_controller_url(@scaffold_controller), as: :json
    end

    assert_response 204
  end
end
