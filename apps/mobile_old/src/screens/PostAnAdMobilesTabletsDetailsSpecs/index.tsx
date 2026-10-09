import React, {useState} from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, TextInput, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
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
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF00",
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 25
						},
						shadowRadius: 50,
						elevation: 50,
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFFF0",
							paddingVertical: 12,
							paddingHorizontal: 16,
							marginBottom: 16,
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
								marginBottom: 12,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lvk5i9ip_expires_30_days.png"}} 
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
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Step 2 of 3"}
								</Text>
							</View>
							<TouchableOpacity 
								style={{
									backgroundColor: "#FFDBCF66",
									borderRadius: 9999,
									paddingVertical: 6,
									paddingHorizontal: 12,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FC6901",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Drafts"}
								</Text>
							</TouchableOpacity>
						</View>
						<View 
							style={{
								backgroundColor: "#E7EEFE",
								borderRadius: 9999,
							}}>
							<View 
								style={{
									width: 271,
									height: 6,
									backgroundColor: "#FC6901",
									borderRadius: 9999,
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 12,
							padding: 13,
							marginBottom: 16,
							marginHorizontal: 16,
							shadowColor: "#151C2708",
							shadowOpacity: 1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 18,
							elevation: 18,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/fk27vni9_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 8,
									width: 48,
									height: 48,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
									paddingLeft: 12,
								}}>
								<View 
									style={{
										backgroundColor: "#89F5E74D",
										borderRadius: 4,
										paddingVertical: 1,
										paddingHorizontal: 6,
										marginBottom: 2,
									}}>
									<Text 
										style={{
											color: "#00685F",
											fontSize: 11,
											fontWeight: "bold",
										}}>
										{"Mobiles & Tablets • 256GB • PTA Approved"}
									</Text>
								</View>
								<View 
									style={{
										paddingRight: 107,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"iPhone 14 Pro Max"}
									</Text>
								</View>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/acik2uop_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 40,
								height: 32,
							}}
						/>
					</View>
					<View 
						style={{
							marginBottom: 19,
							marginHorizontal: 16,
						}}>
						<View 
							style={{
								marginBottom: 24,
							}}>
							<View 
								style={{
									marginBottom: 4,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"Device Details & Specifications"}
								</Text>
							</View>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"Specify storage, battery health, and carrier status for high\nbuyer trust."}
							</Text>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF00",
								borderRadius: 12,
								padding: 17,
								marginBottom: 24,
								shadowColor: "#151C2708",
								shadowOpacity: 1,
								shadowOffset: {
								    width: 0,
								    height: 4
								},
								shadowRadius: 18,
								elevation: 18,
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3214d9m1_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 12,
											height: 18,
										}}
									/>
									<View 
										style={{
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Technical Specifications"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										backgroundColor: "#FFDBCF4D",
										borderRadius: 9999,
										paddingVertical: 2,
										paddingHorizontal: 8,
									}}>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Required"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 16,
								}}>
								<View 
									style={{
										flex: 1,
										marginRight: 12,
									}}>
									<View 
										style={{
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Brand"}
										</Text>
									</View>
									<TextInput
										placeholder={"Apple"}
										value={textInput1}
										onChangeText={onChangeTextInput1}
										style={{
											color: "#151C27",
											fontSize: 14,
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 13,
										}}
									/>
								</View>
								<View 
									style={{
										flex: 1,
									}}>
									<View 
										style={{
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Model"}
										</Text>
									</View>
									<TextInput
										placeholder={"iPhone 14 Pro Max"}
										value={textInput2}
										onChangeText={onChangeTextInput2}
										style={{
											color: "#151C27",
											fontSize: 14,
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 13,
										}}
									/>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 16,
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
										{"Storage Capacity"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<TouchableOpacity 
										style={{
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 16,
											marginRight: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
											}}>
											{"128GB"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#FC6901",
											borderColor: "#FC6901",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 8,
											paddingHorizontal: 10,
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
										<Text 
											style={{
												color: "#FFFBFF",
												fontSize: 16,
												fontWeight: "bold",
											}}>
											{"256GB"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 16,
											marginRight: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
											}}>
											{"512GB"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 25,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
											}}>
											{"1TB"}
										</Text>
									</TouchableOpacity>
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
										{"Battery Health Maximum"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#89F5E74D",
											borderRadius: 9999,
											paddingVertical: 2,
											paddingHorizontal: 8,
										}}>
										<View 
											style={{
												width: 6,
												height: 6,
												backgroundColor: "#00685F",
												borderRadius: 9999,
											}}>
										</View>
										<View 
											style={{
												paddingHorizontal: 4,
											}}>
											<Text 
												style={{
													color: "#00685F",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"Optimal Condition"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 8,
										borderWidth: 1,
										paddingVertical: 11,
										paddingHorizontal: 19,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/uy3ex08n_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 10,
											height: 16,
											marginRight: 11,
										}}
									/>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
										}}>
										{"89% Battery Health"}
									</Text>
									<View 
										style={{
											flex: 1,
											alignSelf: "stretch",
										}}>
									</View>
									<View 
										style={{
											backgroundColor: "#E7EEFE",
											borderRadius: 4,
											paddingVertical: 4,
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#5C4037",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Original Battery"}
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
										marginBottom: 8,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"PTA / Network Status"}
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
											borderColor: "#FC6901",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 13,
											paddingHorizontal: 14,
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
										<Text 
											style={{
												color: "#FFFBFF",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"PTA Approved"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 13,
											paddingHorizontal: 29,
											marginRight: 9,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"Non-PTA"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 13,
											paddingHorizontal: 21,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
											}}>
											{"JV / Locked"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 16,
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
										{"Physical Condition"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
											backgroundColor: "#FFDBCF99",
											borderColor: "#FC6901",
											borderRadius: 8,
											borderWidth: 2,
											paddingVertical: 10,
											paddingHorizontal: 30,
											marginRight: 8,
										}}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"10/10"}
										</Text>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Like New"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 10,
											paddingHorizontal: 14,
											marginRight: 9,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
											}}>
											{"9/10"}
										</Text>
										<Text 
											style={{
												color: "#3D4756",
												fontSize: 10,
											}}>
											{"Minor Scratches"}
										</Text>
									</View>
									<View 
										style={{
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 8,
											borderWidth: 1,
											paddingVertical: 10,
											paddingHorizontal: 22,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
											}}>
											{"8/10"}
										</Text>
										<Text 
											style={{
												color: "#3D4756",
												fontSize: 10,
											}}>
											{"Signs of Use"}
										</Text>
									</View>
								</View>
							</View>
							<View >
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
										{"Device Color"}
									</Text>
								</View>
								<ScrollView 
									horizontal
									showsHorizontalScrollIndicator={false} 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#E7EEFE",
											borderColor: "#FC6901",
											borderRadius: 9999,
											borderWidth: 2,
											paddingVertical: 10,
											paddingHorizontal: 14,
											marginRight: 8,
										}}>
										<View 
											style={{
												width: 14,
												height: 14,
												backgroundColor: "#4E4459",
												borderRadius: 9999,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 2
												},
												shadowRadius: 4,
												elevation: 4,
											}}>
										</View>
										<View 
											style={{
												alignItems: "center",
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Deep Purple"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 10,
											paddingHorizontal: 13,
											marginRight: 9,
										}}>
										<View 
											style={{
												width: 14,
												height: 14,
												backgroundColor: "#202022",
												borderRadius: 9999,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 2
												},
												shadowRadius: 4,
												elevation: 4,
											}}>
										</View>
										<View 
											style={{
												alignItems: "center",
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Space Black"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 10,
											paddingHorizontal: 13,
										}}>
										<View 
											style={{
												width: 14,
												height: 14,
												backgroundColor: "#F3E7D3",
												borderColor: "#DCE2F3",
												borderRadius: 9999,
												borderWidth: 1,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 2
												},
												shadowRadius: 4,
												elevation: 4,
											}}>
										</View>
										<View 
											style={{
												alignItems: "center",
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Gold"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											width: 36,
											height: 36,
											marginRight: 7,
										}}>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 10,
											paddingHorizontal: 13,
										}}>
										<View 
											style={{
												width: 14,
												height: 14,
												backgroundColor: "#F3E7D3",
												borderColor: "#DCE2F3",
												borderRadius: 9999,
												borderWidth: 1,
												shadowColor: "#0000000D",
												shadowOpacity: 0.1,
												shadowOffset: {
												    width: 0,
												    height: 2
												},
												shadowRadius: 4,
												elevation: 4,
											}}>
										</View>
										<View 
											style={{
												alignItems: "center",
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Silver"}
											</Text>
										</View>
									</View>
								</ScrollView>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
								borderWidth: 1,
								paddingBottom: 1,
								marginBottom: 24,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF00",
									borderRadius: 12,
									paddingVertical: 16,
									paddingHorizontal: 17,
									shadowColor: "#151C2708",
									shadowOpacity: 1,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 18,
									elevation: 18,
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/enp1g2j3_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
											}}
										/>
										<View 
											style={{
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"Description & Accessories"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFDBCF66",
											borderRadius: 9999,
											paddingVertical: 4,
											paddingHorizontal: 10,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/msl5tpys_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 13,
												height: 13,
											}}
										/>
										<View 
											style={{
												alignItems: "center",
												paddingHorizontal: 4,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 11,
													fontWeight: "bold",
												}}>
												{"AI Polish"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										marginBottom: 14,
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
											{"Detailed Description"}
										</Text>
									</View>
									<View >
										<View 
											style={{
												backgroundColor: "#F0F3FF",
												borderColor: "#DCE2F3",
												borderRadius: 12,
												borderWidth: 1,
												paddingTop: 12,
												paddingLeft: 13,
												paddingRight: 61,
												marginBottom: 11,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
												}}>
												{"iPhone 14 Pro Max 256GB in Deep Purple. \nFlawless screen with tempered glass applied \nsince day one. Battery health 89%, genuine \nparts, never repaired. Includes original USB-\nC to Lightning cable and Box."}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
												paddingHorizontal: 4,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yy1a6mau_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 11,
														height: 11,
													}}
												/>
												<View 
													style={{
														paddingHorizontal: 4,
													}}>
													<Text 
														style={{
															color: "#00685F",
															fontSize: 10,
															fontWeight: "bold",
														}}>
														{"Good length for high buyer engagement"}
													</Text>
												</View>
											</View>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"194 / 1000"}
											</Text>
										</View>
									</View>
								</View>
								<View >
									<View 
										style={{
											marginBottom: 8,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Tap to append verified accessories & perks"}
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
											<View 
												style={{
													backgroundColor: "#E7EEFE",
													borderColor: "#DCE2F3",
													borderRadius: 9999,
													borderWidth: 1,
													paddingVertical: 5,
													paddingHorizontal: 11,
													marginRight: 6,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"+ Original Box"}
												</Text>
											</View>
											<View 
												style={{
													backgroundColor: "#E7EEFE",
													borderColor: "#DCE2F3",
													borderRadius: 9999,
													borderWidth: 1,
													paddingVertical: 5,
													paddingHorizontal: 11,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"+ Charging Cable"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												alignSelf: "flex-start",
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 6,
											}}>
											<View 
												style={{
													backgroundColor: "#E7EEFE",
													borderColor: "#DCE2F3",
													borderRadius: 9999,
													borderWidth: 1,
													paddingVertical: 5,
													paddingHorizontal: 11,
													marginRight: 6,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"+ FaceID 100% OK"}
												</Text>
											</View>
											<View 
												style={{
													backgroundColor: "#E7EEFE",
													borderColor: "#DCE2F3",
													borderRadius: 9999,
													borderWidth: 1,
													paddingVertical: 5,
													paddingHorizontal: 11,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"+ TrueTone Working"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												alignSelf: "flex-start",
												backgroundColor: "#E7EEFE",
												borderColor: "#DCE2F3",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 5,
												paddingHorizontal: 11,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"+ Never Repaired"}
											</Text>
										</View>
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
								paddingBottom: 1,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF00",
									borderRadius: 12,
									paddingVertical: 16,
									paddingHorizontal: 17,
									shadowColor: "#151C2708",
									shadowOpacity: 1,
									shadowOffset: {
									    width: 0,
									    height: 4
									},
									shadowRadius: 18,
									elevation: 18,
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/epljxhgq_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 18,
												height: 13,
											}}
										/>
										<View 
											style={{
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"Pricing & Market Intelligence"}
											</Text>
										</View>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"USD ($)"}
									</Text>
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
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 12,
											borderWidth: 1,
											paddingVertical: 15,
											paddingHorizontal: 16,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 20,
												fontWeight: "bold",
												marginRight: 14,
											}}>
											{"$"}
										</Text>
										<View 
											style={{
												flex: 1,
												marginRight: 22,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"890"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"USD"}
										</Text>
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
											marginBottom: 8,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Similar iPhone 14 Pro Max in your area"}
										</Text>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Live Data"}
										</Text>
									</View>
									<View >
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<View 
												style={{
													backgroundColor: "#F0F3FF",
													borderColor: "#DCE2F3",
													borderRadius: 12,
													borderWidth: 1,
													paddingVertical: 12,
													paddingHorizontal: 11,
													marginRight: 8,
												}}>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingHorizontal: 14,
													}}>
													<Text 
														style={{
															color: "#555F6F",
															fontSize: 11,
														}}>
														{"Quick Sell"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingTop: 2,
														paddingHorizontal: 21,
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 14,
															fontWeight: "bold",
														}}>
														{"$820"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingHorizontal: 21,
													}}>
													<Text 
														style={{
															color: "#00685F",
															fontSize: 10,
														}}>
														{"< 2 days"}
													</Text>
												</View>
											</View>
											<View 
												style={{
													backgroundColor: "#FFDBCF66",
													borderColor: "#FC6901",
													borderRadius: 12,
													borderWidth: 2,
													padding: 12,
													marginRight: 9,
													shadowColor: "#0000000D",
													shadowOpacity: 0.1,
													shadowOffset: {
													    width: 0,
													    height: 1
													},
													shadowRadius: 2,
													elevation: 2,
												}}>
												<Text 
													style={{
														color: "#FC6901",
														fontSize: 11,
														fontWeight: "bold",
													}}>
													{"Recommended"}
												</Text>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingTop: 2,
														paddingHorizontal: 20,
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 14,
															fontWeight: "bold",
														}}>
														{"$890"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingHorizontal: 13,
													}}>
													<Text 
														style={{
															color: "#FC6901",
															fontSize: 10,
															fontWeight: "bold",
														}}>
														{"Fair Market"}
													</Text>
												</View>
											</View>
											<View 
												style={{
													backgroundColor: "#F0F3FF",
													borderColor: "#DCE2F3",
													borderRadius: 12,
													borderWidth: 1,
													paddingVertical: 12,
													paddingHorizontal: 11,
												}}>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingHorizontal: 11,
													}}>
													<Text 
														style={{
															color: "#555F6F",
															fontSize: 11,
														}}>
														{"Market Avg"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingTop: 2,
														paddingHorizontal: 22,
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 14,
															fontWeight: "bold",
														}}>
														{"$950"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingHorizontal: 18,
													}}>
													<Text 
														style={{
															color: "#555F6F",
															fontSize: 10,
														}}>
														{"~ 2 weeks"}
													</Text>
												</View>
											</View>
										</View>
										<View 
											style={{
												position: "absolute",
												top: -6,
												left: 141,
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingHorizontal: 6,
											}}>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 9,
													fontWeight: "bold",
												}}>
												{"IDEAL"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										alignItems: "center",
										paddingTop: 4,
										marginBottom: 16,
									}}>
									<View 
										style={{
											paddingRight: 160,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Negotiable Price"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
										}}>
										{"Allow buyers to submit realistic counter offers"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 13,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/y2rsu64e_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 13,
											height: 18,
											marginLeft: 13,
										}}
									/>
									<View 
										style={{
											paddingHorizontal: 10,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												width: 261,
											}}>
											{"Verify IMEI number with buyer upon in-person\nexchange for verified protection."}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFFF0",
							paddingVertical: 17,
							paddingHorizontal: 16,
							shadowColor: "#151C2712",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: -8
							},
							shadowRadius: 24,
							elevation: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 12,
								paddingHorizontal: 21,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/68smq4yx_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 5,
									height: 9,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
									paddingHorizontal: 4,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Back"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flex: 1,
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF00",
								borderRadius: 9999,
								paddingVertical: 12,
								paddingHorizontal: 48,
								marginLeft: 12,
								shadowColor: "#D0440057",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 8
								},
								shadowRadius: 20,
								elevation: 20,
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 1,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Next: Location & Review"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/s1rl719v_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 20,
									height: 12,
								}}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}