import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground, } from "react-native";
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
				}}>
				<View 
					style={{
						backgroundColor: "#F9F9FF",
					}}>
					<View 
						style={{
							backgroundColor: "#FFFFFFF0",
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
								paddingVertical: 8,
								paddingHorizontal: 16,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/uxxt3gq9_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 32,
									height: 40,
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
									paddingVertical: 6,
									paddingHorizontal: 12,
								}}>
								<Text 
									style={{
										color: "#A63500",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Drafts"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#DCE2F3",
							}}>
							<View 
								style={{
									width: 293,
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
							marginBottom: 40,
						}}>
						<View 
							style={{
								paddingTop: 16,
								paddingHorizontal: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 13,
									marginBottom: 20,
									shadowColor: "#0000000D",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/znqve5zi_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 8,
										width: 64,
										height: 64,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										flex: 1,
										marginRight: 12,
									}}>
									<View >
										<View 
											style={{
												alignSelf: "flex-start",
												backgroundColor: "#FFDBCF",
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
												{"Property for Sale • 3 Bed • 1,850 Sq Ft"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											paddingTop: 4,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 18,
												fontWeight: "bold",
											}}>
											{"Luxury 3-Bed Apartment"}
										</Text>
									</View>
									<View >
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Gulberg III, Lahore • Ready to Move"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/iv7pdr29_expires_30_days.png"}} 
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
									marginBottom: 20,
								}}>
								<View 
									style={{
										marginBottom: 4,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 24,
											fontWeight: "bold",
										}}>
										{"Property Details & Amenities"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Provide exact layout, area, and utility specifications to reach\nverified tenants or buyers faster."}
								</Text>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 17,
									marginBottom: 20,
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
										marginBottom: 16,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zfpwn5fg_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 15,
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
											{"Core Specifications"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Required"}
									</Text>
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
											{"Purpose"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#E7EEFE",
											borderRadius: 9999,
											padding: 4,
										}}>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 10,
												paddingHorizontal: 38,
												marginRight: 4,
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
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g6fjt462_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 15,
													height: 15,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#FFFFFF",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"For Sale"}
											</Text>
										</TouchableOpacity>
										<View 
											style={{
												borderRadius: 9999,
												paddingVertical: 10,
												paddingHorizontal: 49,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"For Rent"}
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
											{"Property Sub-Type"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<TouchableOpacity 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 8,
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
													color: "#FFFFFF",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Apartment"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 8,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"House / Villa"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 8,
												paddingHorizontal: 16,
												marginRight: 8,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Plot"}
											</Text>
										</TouchableOpacity>
										<View 
											style={{
												flex: 1,
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 8,
												paddingLeft: 16,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Commercial"}
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
												{"Bedrooms"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<TouchableOpacity 
												style={{
													backgroundColor: "#E7EEFE",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 21,
													marginRight: 8,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"1 Bed"}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity 
												style={{
													backgroundColor: "#E7EEFE",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 20,
													marginRight: 8,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"2 Bed"}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity 
												style={{
													backgroundColor: "#FC6901",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 20,
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
														color: "#FFFFFF",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"3 Bed"}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity 
												style={{
													backgroundColor: "#E7EEFE",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 15,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"4+ Bed"}
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
												{"Bathrooms"}
											</Text>
										</View>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<TouchableOpacity 
												style={{
													backgroundColor: "#E7EEFE",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 28,
													marginRight: 8,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"2 Baths"}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity 
												style={{
													backgroundColor: "#FC6901",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 29,
													marginRight: 9,
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
														color: "#FFFFFF",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"3 Baths"}
												</Text>
											</TouchableOpacity>
											<TouchableOpacity 
												style={{
													backgroundColor: "#E7EEFE",
													borderRadius: 8,
													paddingVertical: 8,
													paddingHorizontal: 28,
												}} onPress={()=>alert('Pressed!')}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"4 Baths"}
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
											{"Covered Area"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											borderColor: "#DCE2F3",
											borderRadius: 12,
											borderWidth: 1,
											padding: 1,
										}}>
										<View 
											style={{
												flex: 1,
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FFFFFF",
												paddingHorizontal: 12,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/j5vd3ham_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 14,
												}}
											/>
											<View 
												style={{
													flex: 1,
													paddingVertical: 10,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 14,
													}}>
													{"1,850"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												backgroundColor: "#E7EEFE",
												paddingVertical: 12,
												paddingHorizontal: 13,
											}}>
											<ImageBackground 
												source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/93kb42i4_expires_30_days.png"}} 
												resizeMode = {'stretch'}
												style={{
													alignSelf: "flex-start",
													paddingRight: 16,
												}}
												>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingRight: 25,
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 12,
															fontWeight: "bold",
														}}>
														{"Sq Ft"}
													</Text>
												</View>
											</ImageBackground>
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
											{"Furnishing"}
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
												borderRadius: 8,
												paddingVertical: 15,
												paddingHorizontal: 20,
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
													color: "#FFFFFF",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Furnished"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 8,
												paddingVertical: 8,
												paddingHorizontal: 21,
												marginRight: 9,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
													textAlign: "center",
													width: 60,
												}}>
												{"Semi-\nFurnished"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												backgroundColor: "#E7EEFE",
												borderRadius: 8,
												paddingVertical: 15,
												paddingHorizontal: 14,
											}} onPress={()=>alert('Pressed!')}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Unfurnished"}
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
											{"Floor Level"}
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
											paddingHorizontal: 13,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/d0wz6y09_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 12,
												width: 23,
												height: 15,
											}}
										/>
										<View 
											style={{
												flex: 1,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
												}}>
												{"5th Floor (Elevator available)"}
											</Text>
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
									marginBottom: 20,
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
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4ckcw1dv_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 15,
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
											{"Key Amenities & Features"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#FC6901",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"4 Selected"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
										marginBottom: 12,
									}}>
									{"Select all available amenities to stand out in verified\nsearch filters:"}
								</Text>
								<View 
									style={{
										paddingTop: 4,
									}}>
									<TouchableOpacity 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFDBCF",
											borderColor: "#A6350033",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 13,
											marginBottom: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4uwdevb8_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 10,
												height: 8,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Dedicated Parking"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFDBCF",
											borderColor: "#A6350033",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 13,
											marginBottom: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3zrbka3i_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 10,
												height: 8,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"24/7 Security & CCTV"}
										</Text>
									</TouchableOpacity>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 8,
										}}>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FFDBCF",
												borderColor: "#A6350033",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 9,
												paddingHorizontal: 13,
												marginRight: 13,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/u19apgo2_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 10,
													height: 8,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Backup Generator"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#FFDBCF",
												borderColor: "#A6350033",
												borderRadius: 9999,
												borderWidth: 1,
												paddingVertical: 9,
												paddingHorizontal: 13,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/r1dkipr6_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 10,
													height: 8,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Balcony / Terrace"}
											</Text>
										</TouchableOpacity>
									</View>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 8,
										}}>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 8,
												paddingHorizontal: 12,
												marginRight: 15,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/lhji0o2l_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 9,
													height: 9,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Gas & Water Meter"}
											</Text>
										</TouchableOpacity>
										<TouchableOpacity 
											style={{
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 8,
												paddingHorizontal: 12,
											}} onPress={()=>alert('Pressed!')}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/93mbhjqz_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 9,
													height: 9,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 12,
													fontWeight: "bold",
												}}>
												{"Gym Access"}
											</Text>
										</TouchableOpacity>
									</View>
									<TouchableOpacity 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#E7EEFE",
											borderRadius: 9999,
											paddingVertical: 8,
											paddingHorizontal: 12,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hrm5eqdq_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 9,
												height: 9,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Swimming Pool"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#DCE2F3",
									borderRadius: 12,
									borderWidth: 1,
									padding: 17,
									marginBottom: 20,
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
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9muhoedj_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 15,
												height: 10,
												marginRight: 8,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 18,
												fontWeight: "bold",
											}}>
											{"Detailed Description"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"184 / 1000"}
									</Text>
								</View>
								<View 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingTop: 13,
										paddingHorizontal: 13,
										marginBottom: 12,
									}}>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
										}}>
										{"Corner facing 3-bedroom luxury apartment \nwith stunning city views. Master bedroom \nwith ensuite jacuzzi, Italian fitted kitchen, \nimported fittings, reserved basement \nparking, and 24/7 power backup."}
									</Text>
								</View>
								<View 
									style={{
										paddingTop: 5,
									}}>
									<View 
										style={{
											marginBottom: 8,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Quick highlight tags:"}
										</Text>
									</View>
									<View >
										<View 
											style={{
												alignSelf: "flex-start",
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 8,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													backgroundColor: "#89F5E7",
													borderColor: "#00685F33",
													borderRadius: 9999,
													borderWidth: 1,
													paddingVertical: 5,
													paddingHorizontal: 11,
													marginRight: 13,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/da4hnw3p_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														borderRadius: 9999,
														width: 9,
														height: 7,
														marginRight: 4,
													}}
												/>
												<Text 
													style={{
														color: "#005049",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"Ready for Possession"}
												</Text>
											</View>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													backgroundColor: "#E7EEFE",
													borderRadius: 9999,
													paddingVertical: 5,
													paddingHorizontal: 10,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g2gu77lv_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														borderRadius: 9999,
														width: 8,
														height: 8,
														marginRight: 4,
													}}
												/>
												<Text 
													style={{
														color: "#555F6F",
														fontSize: 10,
														fontWeight: "bold",
													}}>
													{"CDA/LDA Approved"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												alignSelf: "flex-start",
												flexDirection: "row",
												alignItems: "center",
												backgroundColor: "#E7EEFE",
												borderRadius: 9999,
												paddingVertical: 4,
												paddingHorizontal: 10,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2rj46nc5_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 9999,
													width: 8,
													height: 8,
													marginRight: 4,
												}}
											/>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"Direct Owner"}
											</Text>
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
									marginBottom: 83,
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
										marginBottom: 16,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2ufs8ohs_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 18,
												height: 13,
												marginRight: 8,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 18,
												fontWeight: "bold",
											}}>
											{"Pricing & Valuation"}
										</Text>
									</View>
									<View 
										style={{
											backgroundColor: "#E7EEFE",
											borderRadius: 9999,
											paddingVertical: 2,
											paddingHorizontal: 8,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Gulberg Rates"}
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
											padding: 2,
										}}>
										<View 
											style={{
												backgroundColor: "#FFDBCF",
												paddingVertical: 12,
												paddingHorizontal: 14,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"$"}
											</Text>
										</View>
										<View 
											style={{
												flex: 1,
												padding: 12,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 20,
													fontWeight: "bold",
												}}>
												{"145,000"}
											</Text>
										</View>
										<View 
											style={{
												alignItems: "center",
												paddingRight: 11,
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 10,
													fontWeight: "bold",
													textAlign: "right",
													width: 60,
												}}>
												{"PKR ≈\n40,500,000"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										backgroundColor: "#F0F3FF",
										borderColor: "#E2E8F8",
										borderRadius: 12,
										borderWidth: 1,
										padding: 13,
										marginBottom: 16,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 8,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/m8371ywe_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 14,
													height: 11,
													marginRight: 4,
												}}
											/>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 10,
													fontWeight: "bold",
												}}>
												{"Listify Market Intelligence"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#00685F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"Good Value"}
										</Text>
									</View>
									<View >
										<View 
											style={{
												position: "absolute",
												top: -3,
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
														color: "#FFFFFF",
														fontSize: 9,
														fontWeight: "bold",
													}}>
													{"Fair"}
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
													backgroundColor: "#FFFFFF",
													borderColor: "#DCE2F3",
													borderRadius: 8,
													borderWidth: 1,
													padding: 9,
													marginRight: 6,
												}}>
												<View 
													style={{
														alignItems: "center",
														marginBottom: 2,
													}}>
													<Text 
														style={{
															color: "#555F6F",
															fontSize: 10,
															fontWeight: "bold",
														}}>
														{"Quick Deal"}
													</Text>
												</View>
												<View 
													style={{
														alignItems: "center",
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 12,
															fontWeight: "bold",
														}}>
														{"$135,000"}
													</Text>
												</View>
											</View>
											<View 
												style={{
													flex: 1,
													backgroundColor: "#FFDBCF",
													borderColor: "#A635004D",
													borderRadius: 8,
													borderWidth: 1,
													padding: 9,
													marginRight: 6,
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
														alignItems: "center",
														marginBottom: 2,
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
												<View 
													style={{
														alignItems: "center",
													}}>
													<Text 
														style={{
															color: "#FC6901",
															fontSize: 12,
															fontWeight: "bold",
														}}>
														{"$145,000"}
													</Text>
												</View>
											</View>
											<View 
												style={{
													flex: 1,
													backgroundColor: "#FFFFFF",
													borderColor: "#DCE2F3",
													borderRadius: 8,
													borderWidth: 1,
													padding: 9,
												}}>
												<View 
													style={{
														alignItems: "center",
														marginBottom: 2,
													}}>
													<Text 
														style={{
															color: "#555F6F",
															fontSize: 10,
															fontWeight: "bold",
														}}>
														{"High End"}
													</Text>
												</View>
												<View 
													style={{
														alignItems: "center",
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 12,
															fontWeight: "bold",
														}}>
														{"$160,000"}
													</Text>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View 
									style={{
										paddingTop: 4,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 12,
										}}>
										<View 
											style={{
												alignItems: "center",
											}}>
											<View 
												style={{
													paddingRight: 75,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"Installment Plan Available"}
												</Text>
											</View>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
												}}>
												{"Buyer can pay via structured milestones"}
											</Text>
										</View>
										<View 
											style={{
												backgroundColor: "#DCE2F3",
												borderRadius: 9999,
												paddingVertical: 2,
												paddingLeft: 2,
												paddingRight: 26,
											}}>
											<View 
												style={{
													width: 20,
													height: 20,
													backgroundColor: "#FFFFFF",
													borderRadius: 9999,
													shadowColor: "#0000000D",
													shadowOpacity: 0.1,
													shadowOffset: {
													    width: 0,
													    height: 1
													},
													shadowRadius: 2,
													elevation: 2,
												}}>
											</View>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
										}}>
										<View 
											style={{
												alignItems: "center",
											}}>
											<View 
												style={{
													paddingRight: 161,
												}}>
												<Text 
													style={{
														color: "#151C27",
														fontSize: 12,
														fontWeight: "bold",
													}}>
													{"Price Negotiable"}
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
												backgroundColor: "#FC6901",
												borderRadius: 9999,
												paddingVertical: 2,
												paddingLeft: 26,
												paddingRight: 2,
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
													width: 20,
													height: 20,
													backgroundColor: "#FFFFFF",
													borderRadius: 9999,
													shadowColor: "#0000000D",
													shadowOpacity: 0.1,
													shadowOffset: {
													    width: 0,
													    height: 1
													},
													shadowRadius: 2,
													elevation: 2,
												}}>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								position: "absolute",
								bottom: -9,
								right: 16,
								left: 16,
								backgroundColor: "#E2E8F8",
								borderRadius: 12,
								paddingVertical: 12,
								paddingLeft: 12,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/xhfmsyez_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 13,
										height: 18,
										marginRight: 10,
									}}
								/>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 12,
										width: 296,
									}}>
									{"Ads with verified square footage and floor numbers\nget 3.2x more genuine buyer calls within the first 48\nhours."}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFFFFFF0",
							padding: 12,
							shadowColor: "#1118270D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: -4
							},
							shadowRadius: 16,
							elevation: 16,
						}}>
						<TouchableOpacity 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 13,
								paddingHorizontal: 47,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/hszbt3qz_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 5,
									height: 9,
									marginRight: 4,
								}}
							/>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"Back"}
							</Text>
						</TouchableOpacity>
						<View 
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#FFFFFF00",
								borderRadius: 9999,
								paddingVertical: 4,
								shadowColor: "#FF55004D",
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
									paddingHorizontal: 22,
									marginRight: 6,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 14,
										fontWeight: "bold",
										textAlign: "center",
										width: 114,
									}}>
									{"Next: Location &\nReview"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5fp6pih2_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 12,
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