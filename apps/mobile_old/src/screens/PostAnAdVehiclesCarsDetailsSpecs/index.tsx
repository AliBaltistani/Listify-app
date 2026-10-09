import React from "react";
import { View, ScrollView, Image, Text, ImageBackground, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingBottom: 1,
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						shadowColor: "#0000000D",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 1
						},
						shadowRadius: 2,
						elevation: 2,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 9,
							paddingHorizontal: 16,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ct8d7f0b_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 36,
								height: 36,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
							}}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Create Listing"}
							</Text>
							<Text 
								style={{
									color: "#FC6901",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"Step 2 of 3"}
							</Text>
						</View>
						<View 
							style={{
								borderRadius: 9999,
								paddingVertical: 4,
								paddingHorizontal: 12,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"Drafts"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#E7EEFE",
						}}>
						<View 
							style={{
								width: 290,
								height: 4,
								backgroundColor: "#FC6901",
								borderTopRightRadius: 9999,
								borderBottomRightRadius: 9999,
							}}>
						</View>
					</View>
				</View>
				<View 
					style={{
						paddingTop: 16,
						paddingHorizontal: 16,
						marginBottom: 1,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 12,
							padding: 13,
							marginBottom: 16,
							shadowColor: "#11182708",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 8
							},
							shadowRadius: 24,
							elevation: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#E7EEFE",
									borderRadius: 8,
									marginRight: 12,
								}}>
								<ImageBackground 
									source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/h204iava_expires_30_days.png"}} 
									resizeMode = {'stretch'}
									imageStyle={{borderRadius: 8,}}
									style={{
										paddingTop: 37,
										paddingHorizontal: 6,
									}}
									>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#2A313DCC",
											borderRadius: 4,
											paddingHorizontal: 4,
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#EBF1FF",
												fontSize: 9,
											}}>
											{"5 photos"}
										</Text>
									</View>
								</ImageBackground>
							</View>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<View 
										style={{
											backgroundColor: "#F0F3FF",
											borderRadius: 4,
											paddingVertical: 2,
											paddingHorizontal: 6,
											marginRight: 6,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"Cars & Sedans"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#D3DAEA",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 7,
										}}>
										{"•"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											marginRight: 6,
										}}>
										{"Automatic"}
									</Text>
									<Text 
										style={{
											color: "#D3DAEA",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 6,
										}}>
										{"•"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
										}}>
										{"42,000 km"}
									</Text>
								</View>
								<View 
									style={{
										paddingTop: 2,
										paddingRight: 43,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"Honda Civic Oriel 2021"}
									</Text>
								</View>
								<View 
									style={{
										paddingRight: 32,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Vehicles & Cars > Cars & Sedans"}
									</Text>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/d6bkgd1l_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 32,
								height: 32,
							}}
						/>
					</View>
					<View 
						style={{
							paddingRight: 4,
							marginBottom: 16,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFDBCF",
								borderRadius: 9999,
								paddingVertical: 4,
								paddingHorizontal: 10,
								marginBottom: 4,
								marginLeft: 4,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/bfzkk6xi_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 10,
									height: 10,
									marginRight: 6,
								}}
							/>
							<Text 
								style={{
									color: "#390C00",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"Mandatory Vehicle Specs"}
							</Text>
						</View>
						<View 
							style={{
								paddingTop: 2,
								marginBottom: 4,
								marginLeft: 4,
							}}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 24,
									fontWeight: "bold",
								}}>
								{"Vehicle Details &\nSpecifications"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#555F6F",
								fontSize: 14,
								marginLeft: 4,
							}}>
							{"Provide accurate mileage, transmission, and\ninspection details to attract verified buyers."}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 17,
							marginBottom: 16,
							shadowColor: "#11182705",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lw47admv_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 13,
										marginRight: 8,
									}}
								/>
								<View 
									style={{
										paddingRight: 84,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
											width: 124,
										}}>
										{"1. Vehicle\nSpecifications"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									paddingRight: 23,
								}}>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 10,
										fontWeight: "bold",
										width: 63,
									}}>
									{"100% Match\nRate"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Make & Model"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#F0F3FF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 11,
									paddingHorizontal: 13,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 16,
											fontWeight: "bold",
											marginRight: 8,
										}}>
										{"Honda"}
									</Text>
									<Text 
										style={{
											color: "#DCE2F3",
											fontSize: 16,
											fontWeight: "bold",
											marginRight: 8,
										}}>
										{"/"}
									</Text>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 16,
											fontWeight: "bold",
										}}>
										{"Civic Oriel 1.8"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											fontWeight: "bold",
											marginRight: 3,
										}}>
										{"Change"}
									</Text>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/of73q829_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 7,
											height: 4,
										}}
									/>
								</View>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Model Year"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"9th Gen Face-lift"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 14,
										marginRight: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"2019"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 13,
										marginRight: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"2020"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FC6901",
										borderColor: "#FC6901",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 15,
										marginRight: 9,
										shadowColor: "#D044004D",
										shadowOpacity: 0.3,
										shadowOffset: {
										    width: 0,
										    height: 4
										},
										shadowRadius: 12,
										elevation: 12,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFBFF",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"2021"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 13,
										marginRight: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"2022"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 9,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"2023+"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View 
							style={{
								paddingTop: 4,
								marginBottom: 16,
							}}>
							<View 
								style={{
									marginBottom: 12,
								}}>
								<View 
									style={{
										marginBottom: 6,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Mileage (km)"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 12,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/25swfxbx_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 15,
											height: 18,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 16,
												fontWeight: "bold",
											}}>
											{"42,000 km"}
										</Text>
									</View>
								</View>
							</View>
							<View >
								<View 
									style={{
										marginBottom: 6,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Assembly"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FC6901",
											borderRadius: 12,
											paddingVertical: 10,
											paddingHorizontal: 52,
											marginRight: 8,
											shadowColor: "#D0440040",
											shadowOpacity: 0.3,
											shadowOffset: {
											    width: 0,
											    height: 2
											},
											shadowRadius: 8,
											elevation: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hqzwunaz_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 12,
												width: 10,
												height: 8,
												marginRight: 4,
											}}
										/>
										<Text 
											style={{
												color: "#FFFBFF",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Local"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 12,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 52,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Imported"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Transmission"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F0F3FF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 5,
								}}>
								<TouchableOpacity 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#A6350033",
										borderRadius: 8,
										borderWidth: 1,
										paddingVertical: 9,
										paddingHorizontal: 33,
										marginRight: 8,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/df2nlk6y_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 16,
											height: 13,
											marginRight: 6,
										}}
									/>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Automatic"}
									</Text>
								</TouchableOpacity>
								<View 
									style={{
										borderRadius: 8,
										paddingVertical: 9,
										paddingHorizontal: 55,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Manual"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Fuel Type"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#FC6901",
										borderRadius: 12,
										paddingVertical: 8,
										paddingHorizontal: 20,
										marginRight: 6,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFBFF",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Petrol"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 9,
										paddingHorizontal: 18,
										marginRight: 7,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Hybrid"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 9,
										paddingHorizontal: 19,
										marginRight: 6,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Diesel"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 9,
										paddingHorizontal: 15,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Electric"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View >
							<View 
								style={{
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Registered City"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 11,
									paddingHorizontal: 13,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5szad845_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 15,
											marginRight: 8,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
										}}>
										{"Lahore (Punjab Registered)"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/j1ekkwcc_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 6,
										height: 13,
									}}
								/>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 17,
							marginBottom: 16,
							shadowColor: "#11182705",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 14,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/nutaim2j_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 13,
										height: 16,
										marginRight: 8,
									}}
								/>
								<View 
									style={{
										paddingRight: 75,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
											width: 137,
										}}>
										{"2. Description &\nFeatures"}
									</Text>
								</View>
							</View>
							<TouchableOpacity 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFDBCF",
									borderRadius: 9999,
									paddingVertical: 4,
									paddingHorizontal: 10,
								}} onPress={()=>alert('Pressed!')}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lzu3mlw6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 12,
										height: 12,
										marginRight: 11,
									}}
								/>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 10,
										fontWeight: "bold",
										textAlign: "center",
										width: 31,
									}}>
									{"AI\nPolish"}
								</Text>
							</TouchableOpacity>
						</View>
						<View 
							style={{
								paddingBottom: 5,
								marginBottom: 14,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 4,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Ad Description"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"218 / 1000"}
								</Text>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									paddingTop: 11,
									paddingHorizontal: 13,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
									}}>
									{"First owner Honda Civic Oriel 2021 in \nimmaculate condition. Total original paint, \nscratchless bumper to bumper. Sunroof, \nleather seats, cruise control, maintained at \nauthorized dealership with complete \nlogbook."}
								</Text>
							</View>
						</View>
						<View >
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/x9hgyvq6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 11,
										height: 9,
										marginRight: 4,
									}}
								/>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Tap to append highlighted tags:"}
								</Text>
							</View>
							<View >
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 6,
									}}>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 7,
											paddingHorizontal: 11,
											marginRight: 6,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
												marginRight: 4,
											}}>
											{"+"}
										</Text>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"Sunroof"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 7,
											paddingHorizontal: 11,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
												marginRight: 4,
											}}>
											{"+"}
										</Text>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"First Owner"}
										</Text>
									</TouchableOpacity>
								</View>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 6,
									}}>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 7,
											paddingHorizontal: 11,
											marginRight: 6,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
												marginRight: 4,
											}}>
											{"+"}
										</Text>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"Dealership Maintained"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 7,
											paddingHorizontal: 11,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
												marginRight: 4,
											}}>
											{"+"}
										</Text>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
											}}>
											{"Original Paint"}
										</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 9999,
										borderWidth: 1,
										paddingVertical: 7,
										paddingHorizontal: 11,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 12,
											fontWeight: "bold",
											marginRight: 4,
										}}>
										{"+"}
									</Text>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
										}}>
										{"Token Tax Paid"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 17,
							marginBottom: 16,
							shadowColor: "#11182705",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xjzpj8ok_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 18,
										height: 13,
										marginRight: 8,
									}}
								/>
								<View 
									style={{
										paddingRight: 66,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 18,
											fontWeight: "bold",
											width: 164,
										}}>
										{"3. Pricing & Market\nValuation"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#E7EEFE",
									borderRadius: 9999,
									paddingVertical: 2,
									paddingLeft: 8,
									paddingRight: 27,
								}}>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
										width: 28,
									}}>
									{"USD /\nPKR"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									marginBottom: 6,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Asking Price"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#FC6901",
									borderRadius: 12,
									borderWidth: 2,
									paddingVertical: 14,
									paddingHorizontal: 12,
								}}>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 20,
										fontWeight: "bold",
										marginRight: 14,
									}}>
									{"$"}
								</Text>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"18,500"}
								</Text>
								<View 
									style={{
										flex: 1,
										alignSelf: "stretch",
									}}>
								</View>
								<View 
									style={{
										backgroundColor: "#F0F3FF",
										borderRadius: 4,
										paddingVertical: 4,
										paddingHorizontal: 8,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"≈ PKR 5,150,000"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#F0F3FF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 15,
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 10,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/z7g6keed_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 15,
											height: 15,
											marginRight: 6,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Listify Market Intelligence"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/r4l7c6tf_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 11,
											height: 10,
											marginRight: 1,
										}}
									/>
									<Text 
										style={{
											color: "#00685F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"High Demand"}
									</Text>
								</View>
							</View>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									marginBottom: 10,
								}}>
								{"Based on 34 Civic Oriels (2021) sold in Lahore over\nthe past 30 days:"}
							</Text>
							<View >
								<View 
									style={{
										position: "absolute",
										top: -2,
										right: 0,
										left: 0,
										alignItems: "center",
									}}>
									<View 
										style={{
											backgroundColor: "#FC6901",
											borderRadius: 9999,
											paddingHorizontal: 6,
										}}>
										<Text 
											style={{
												color: "#FFFBFF",
												fontSize: 9,
												fontWeight: "bold",
											}}>
											{"BEST"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										paddingVertical: 4,
										paddingHorizontal: 25,
									}}>
									<View 
										style={{
											flex: 1,
											alignItems: "center",
											backgroundColor: "#FFFFFF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 10,
											marginRight: 8,
										}}>
										<View 
											style={{
												alignSelf: "stretch",
												alignItems: "center",
												marginBottom: 2,
												marginHorizontal: 9,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Quick Sell"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"$17,200"}
										</Text>
									</View>
									<View 
										style={{
											flex: 1,
											alignItems: "center",
											backgroundColor: "#FFDBCF66",
											borderColor: "#FC6901",
											borderRadius: 8,
											borderWidth: 2,
											paddingVertical: 10,
											marginRight: 9,
										}}>
										<View 
											style={{
												alignSelf: "stretch",
												marginBottom: 2,
												marginHorizontal: 10,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 11,
													fontWeight: "bold",
												}}>
												{"Recommended"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"$18,500"}
										</Text>
									</View>
									<View 
										style={{
											flex: 1,
											alignItems: "center",
											backgroundColor: "#FFFFFF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 10,
										}}>
										<View 
											style={{
												alignSelf: "stretch",
												alignItems: "center",
												marginBottom: 2,
												marginHorizontal: 9,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 11,
												}}>
												{"Market Avg"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"$19,800"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								padding: 13,
							}}>
							<View 
								style={{
									paddingBottom: 2,
									paddingRight: 64,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
										marginBottom: 5,
									}}>
									{"Negotiable Price"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
										marginBottom: 8,
									}}>
									{"Allow prospective buyers to make"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"competitive counter-offers"}
								</Text>
							</View>
							<View 
								style={{
									backgroundColor: "#FC6901",
									borderRadius: 9999,
									paddingVertical: 2,
									paddingLeft: 22,
									paddingRight: 2,
								}}>
								<View 
									style={{
										width: 20,
										height: 20,
										backgroundColor: "#FFFFFF",
										borderColor: "#FFFFFF",
										borderRadius: 9999,
										borderWidth: 1,
									}}>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 12,
							borderWidth: 1,
							padding: 17,
							marginBottom: 16,
							shadowColor: "#11182705",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingBottom: 9,
								marginBottom: 14,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/fpg2iquc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 16,
									height: 15,
									marginRight: 8,
								}}
							/>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"4. Inspection & Condition"}
							</Text>
						</View>
						<View 
							style={{
								marginBottom: 14,
							}}>
							<View 
								style={{
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Overall Vehicle Condition"}
								</Text>
							</View>
							<View >
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										backgroundColor: "#FFDBCF33",
										borderColor: "#FC6901",
										borderRadius: 12,
										borderWidth: 2,
										padding: 14,
										marginBottom: 8,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<View 
											style={{
												width: 14,
												height: 16,
												backgroundColor: "#FFFFFF",
												borderColor: "#FC6901",
												borderRadius: 9999,
												borderWidth: 4,
												marginRight: 10,
											}}>
										</View>
										<View 
											style={{
												paddingBottom: 2,
												paddingRight: 14,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
													marginBottom: 5,
												}}>
												{"Excellent (Flawless)"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													marginBottom: 8,
												}}>
												{"Clean body panels, no mechanical issues,"}
											</Text>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
												}}>
												{"intact logbook"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/b8d2pppl_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 18,
											height: 17,
										}}
									/>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 13,
										paddingLeft: 13,
										marginBottom: 8,
									}}>
									<View 
										style={{
											width: 16,
											height: 16,
											backgroundColor: "#FFFFFF",
											borderColor: "#555F6F",
											borderRadius: 9999,
											borderWidth: 1,
											marginRight: 10,
										}}>
									</View>
									<View 
										style={{
											alignItems: "center",
											paddingBottom: 2,
										}}>
										<View 
											style={{
												paddingRight: 145,
												marginBottom: 5,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Good (Minor wear)"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Normal usage signs, minor touched-up spots"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 13,
										paddingLeft: 13,
									}}>
									<View 
										style={{
											width: 16,
											height: 16,
											backgroundColor: "#FFFFFF",
											borderColor: "#555F6F",
											borderRadius: 9999,
											borderWidth: 1,
											marginRight: 10,
										}}>
									</View>
									<View 
										style={{
											alignItems: "center",
											paddingBottom: 2,
										}}>
										<View 
											style={{
												paddingRight: 241,
												marginBottom: 5,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Fair"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Requires minor servicing or aesthetic detailing"}
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#0083781A",
								borderColor: "#0083784D",
								borderRadius: 12,
								borderWidth: 1,
								padding: 13,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0h1j2npa_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 32,
									height: 34,
									marginRight: 12,
								}}
							/>
							<View 
								style={{
									flex: 1,
								}}>
								<View 
									style={{
										marginBottom: 2,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 6,
										}}>
										{"Listify 200-Point Car Inspection Report"}
									</Text>
									<View 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#00685F",
											borderRadius: 9999,
											paddingHorizontal: 6,
										}}>
										<Text 
											style={{
												color: "#FFFFFF",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Included"}
										</Text>
									</View>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Attached verification badge unlocks 3.2x\nfaster buyer responses and a verified seller\nshield."}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							paddingVertical: 8,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/431970q9_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 10,
								height: 14,
								marginRight: 8,
							}}
						/>
						<Text 
							style={{
								color: "#555F6F",
								fontSize: 10,
								fontWeight: "bold",
							}}>
							{"Protected by Listify Buyer & Seller Direct Guarantee"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 12,
						paddingHorizontal: 16,
						shadowColor: "#11182712",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: -4
						},
						shadowRadius: 20,
						elevation: 20,
					}}>
					<TouchableOpacity 
						style={{
							backgroundColor: "#FFFFFF",
							borderColor: "#DCE2F3",
							borderRadius: 9999,
							borderWidth: 2,
							paddingVertical: 14,
							paddingHorizontal: 42,
							marginRight: 12,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"Back"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FC6901",
							borderRadius: 9999,
							paddingVertical: 14,
							paddingHorizontal: 18,
							shadowColor: "#D0440057",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 8
							},
							shadowRadius: 20,
							elevation: 20,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFBFF",
								fontSize: 14,
								fontWeight: "bold",
								marginRight: 9,
							}}>
							{"Next: Location & Review"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mxwe314d_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 13,
								height: 13,
							}}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}